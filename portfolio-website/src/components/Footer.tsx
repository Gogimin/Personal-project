export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p>&copy; 2025 Portfolio Website. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a
              href="https://github.com/Gogimin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/kimzimmin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://blog.naver.com/kzm0502"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}