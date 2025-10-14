export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="mt-12 border-t border-neutral-800 py-6">
      <div className="max-w-6xl mx-auto px-4 text-sm flex justify-between items-center">
        <div>© {year} Colby Hackers — Built by students of Colby College</div>
        <div className="space-x-3">
          <a href="#" className="underline">GitHub</a>
          <a href="#" className="underline">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
