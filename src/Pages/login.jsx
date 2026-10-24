import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // regex code

const validators = {
  email: (v) => {
    const value = v.trim();
    if (!value) return "Enter your email address.";
    if (!EMAIL_RE.test(value)) return "Enter a valid email, like name@example.com.";
    return "";
  },
  password: (v) => {
    if (!v) return "Enter your password.";
    if (v.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Za-z]/.test(v) || !/\d/.test(v))
      return "Use at least one letter and one number.";
    return "";
  },
};

export default function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false); //api ke baad remove kr dena
  const [status, setStatus] = useState(null); // { type: "good" | "bad", message }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setStatus(null);
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validators[name](value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validators[name](value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {
      email: validators.email(values.email),
      password: validators.password(values.password),
    };
    setTouched({ email: true, password: true });
    setErrors(nextErrors);

    if (nextErrors.email || nextErrors.password) {
      setStatus({ type: "bad", message: "Fix the highlighted fields and try again." });
      document.getElementById(nextErrors.email ? "email" : "password")?.focus();
      return;
    }

    setLoading(true);
    setStatus(null);

    // Demo only: replace this timeout with your real login API call, e.g.
    // fetch("/api/login", { method: "POST", body: JSON.stringify({ ...values, remember }) })
    setTimeout(() => {
      setLoading(false);
      if (
        values.email.trim().toLowerCase() === "demo@nexrora.com" &&
        values.password === "Shop1234"
      ) {
        setStatus({ type: "good", message: "Signed in. Taking you to your account…" });
      } else {
        setStatus({
          type: "bad",
          message: "Email or password is incorrect. Check both and try again.",
        });
      }
    }, 900);
  };

  const inputClass = (name) =>
    [
      "w-full rounded-xl border-[1.5px] px-3.5 py-3 text-base outline-none transition",
      "bg-white text-[#10243E] placeholder:text-slate-400",
      "dark:bg-[#13233A] dark:text-slate-100 dark:placeholder:text-slate-500",
      "focus-visible:ring-4 focus-visible:ring-[#0F8F7E]/25",
      errors[name]
        ? "border-red-600 bg-red-50 dark:border-red-400 dark:bg-red-950/40"
        : "border-slate-300 focus-visible:border-[#0F8F7E] dark:border-slate-600 dark:focus-visible:border-[#2BC1AC]",
    ].join(" ");

  return (
    <div className="grid min-h-[100dvh] bg-slate-50 text-[#10243E] dark:bg-[#0B1522] dark:text-slate-100 lg:grid-cols-2">
      {/* Brand panel: visible from laptop size up */}
      <aside
        aria-hidden="true"
        className="hidden flex-col justify-between gap-8 bg-[#10243E] p-10 text-slate-50 dark:bg-[#0E1C2F] lg:flex xl:p-14"
      >
        <div className="text-2xl font-extrabold tracking-tight">
          Nex<span className="text-[#7862e7]">rora</span>
        </div>

        <div>
          <h2 className="mb-3 max-w-[14ch] text-4xl font-extrabold leading-tight tracking-tight xl:text-5xl">
            Your cart is waiting.
          </h2>
          <p className="max-w-[36ch] text-slate-300">
            Sign in to track orders, save your wishlist, and check out faster.
          </p>
        </div>

        <div className="grid max-w-sm grid-cols-3 gap-3">
          <div className="relative flex aspect-[3/4] items-end rounded-2xl bg-[#FFC857] p-2.5 text-xs font-semibold text-[#10243E]">
            <span className="absolute left-1/2 top-3.5 aspect-square w-[46%] -translate-x-1/2 rounded-full bg-[#10243E]/15" />
            Sneakers
          </div>
          <div className="relative mt-6 flex aspect-[3/4] items-end rounded-2xl bg-[#7FD6C8] p-2.5 text-xs font-semibold text-[#10243E]">
            <span className="absolute left-1/2 top-3.5 aspect-square w-[46%] -translate-x-1/2 rounded-xl bg-[#10243E]/15" />
            Home
          </div>
          <div className="relative flex aspect-[3/4] items-end rounded-2xl bg-slate-50 p-2.5 text-xs font-semibold text-[#10243E]">
            <span className="absolute left-1/2 top-3.5 aspect-square w-[46%] -translate-x-1/2 rounded-t-full rounded-b-xl bg-[#10243E]/15" />
            Audio
          </div>
        </div>
      </aside>

      {/* Form side */}
      <main className="flex items-center justify-center px-4 py-8 sm:px-8 md:py-12">
        <div className="w-full max-w-md">
          {/* Logo for phones and tablets (panel is hidden there) */}
          <div className="mb-8 text-2xl font-extrabold tracking-tight lg:hidden">
            Nex<span className="text-[#0F8F7E] dark:text-[#FFC857]">rora</span>
          </div>

          <h1 className="mb-1.5 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Sign in
          </h1>
          <p className="mb-7 text-slate-600 dark:text-slate-400">
            Welcome back. Enter your details to continue shopping.
          </p>

          {status && (
            <div
              role="alert"
              className={`mb-5 rounded-xl px-3.5 py-3 text-sm font-medium ${
                status.type === "good"
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                  : "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.email)}
                aria-describedby="email-error"
                className={inputClass("email")}
              />
              <p
                id="email-error"
                aria-live="polite"
                className={`mt-1.5 text-sm text-red-600 dark:text-red-400 ${
                  errors.email ? "" : "hidden"
                }`}
              >
                {errors.email}
              </p>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="mb-1.5 block text-sm font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="At least 8 characters"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby="password-error"
                  className={`${inputClass("password")} pr-16`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg px-2.5 py-2 text-sm font-semibold text-[#0F8F7E] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F8F7E] dark:text-[#2BC1AC]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <p
                id="password-error"
                aria-live="polite"
                className={`mt-1.5 text-sm text-red-600 dark:text-red-400 ${
                  errors.password ? "" : "hidden"
                }`}
              >
                {errors.password}
              </p>
            </div>

            {/* Remember + forgot */}
            <div className="mb-6 mt-1 flex flex-wrap items-center justify-between gap-3 text-sm">
              <label className="flex cursor-pointer items-center gap-2 font-medium">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-[18px] w-[18px] accent-[#0F8F7E]"
                />
                Keep me signed in
              </label>
              <a
                href="/forgot-password"
                className="font-semibold text-[#0F8F7E] hover:underline dark:text-[#2BC1AC]"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{ backgroundColor: "#0F8F7E", color: "#FFFFFF" }}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl px-4 py-3.5 text-base font-extrabold transition hover:brightness-90 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F8F7E] disabled:cursor-progress disabled:opacity-70"
            >
              {loading && (
                <span
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin rounded-full border-[2.5px] border-current border-r-transparent"
                />
              )}
              {loading ? "Signing in" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            New to Nexrora?{" "}
            <a
              href="/signup"
              className="font-semibold text-[#0F8F7E] hover:underline dark:text-[#2BC1AC]"
            >
              Create an account
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}