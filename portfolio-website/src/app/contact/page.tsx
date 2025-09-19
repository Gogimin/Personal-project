import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - 김지민 | 연락하기",
  description: "AI/ML 엔지니어 김지민에게 연락하세요. 협업, 기술 상담, 프로젝트 제안 등 언제든 연락 주세요. 빠른 시간 내에 답변드리겠습니다.",
};

export default function Contact() {
  return (
    <Layout>
      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden" style={{minHeight: 'calc(100vh - 120px)'}}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-md rounded-full shadow-xl mb-6 border border-white/20 hover:shadow-2xl transition-all duration-300">
              <span className="text-3xl mr-4 animate-pulse">💬</span>
              <span className="text-gray-700 font-bold text-lg">연락하기</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed">
              새로운 프로젝트, 협업 기회, 기술 상담 등<br/>
              <span className="text-blue-600 font-bold">언제든 편하게 연락주세요</span> ✨
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Left Column - Contact Info & Social */}
              <div className="space-y-4">
                {/* Contact Info */}
                <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center mb-5">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-2xl">📞</span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900">연락처 정보</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="group relative overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          📧
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">이메일</h4>
                          <p className="text-gray-600 font-medium">kzm0502@naver.com</p>
                        </div>
                        <a
                          href="mailto:kzm0502@naver.com"
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          연락하기
                        </a>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          📱
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">전화번호</h4>
                          <p className="text-gray-600 font-medium">010-8652-0705</p>
                        </div>
                        <a
                          href="tel:+82-10-8652-0705"
                          className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          전화하기
                        </a>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          📍
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">위치</h4>
                          <p className="text-gray-600 font-medium">경기도 안양시</p>
                          <div className="flex items-center mt-1">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            <p className="text-sm text-green-600 font-semibold">원격 협업 가능</p>
                          </div>
                        </div>
                        <div className="text-purple-500">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center mb-5">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900">소셜 미디어</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="group relative overflow-hidden bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center text-white text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">GitHub</h4>
                          <p className="text-gray-600 text-sm font-medium">프로젝트 코드 & 오픈소스</p>
                        </div>
                        <a
                          href="https://github.com/Gogimin"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg text-sm font-medium hover:from-gray-600 hover:to-gray-800 transition-colors"
                        >
                          방문
                        </a>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">Instagram</h4>
                          <p className="text-gray-600 text-sm font-medium">일상 & 개발 여정</p>
                        </div>
                        <a
                          href="https://www.instagram.com/kimzimmin/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-colors"
                        >
                          방문
                        </a>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">기술 블로그</h4>
                          <p className="text-gray-600 text-sm font-medium">학습 기록 & 인사이트</p>
                        </div>
                        <a
                          href="https://blog.naver.com/kzm0502"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-teal-600 transition-colors"
                        >
                          방문
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Right Column */}
              <div>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-full">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                        <span className="text-2xl mr-3">✉️</span>
                        메시지 보내기
                      </h3>
                      <p className="text-gray-600 text-sm">
                        프로젝트, 협업, 상담 등 무엇이든 편하게 연락주세요
                      </p>
                    </div>

                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}