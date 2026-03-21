export default function Footer() {
  return (
    <footer className="w-full bg-slate-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Central GPU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}