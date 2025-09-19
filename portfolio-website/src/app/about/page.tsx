import Layout from '@/components/Layout';
import ProfileImage from '@/components/ProfileImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About - 김지민 | AI 개발자",
  description: "풀스택 AI 개발자 김지민의 이력서 - 고용노동부장관상 수상, 92% 추천 만족도, 20% 성능 향상 달성. AI/ML부터 웹 서비스까지 엔드투엔드 개발 역량을 확인하세요.",
};

export default function About() {
  return (
    <Layout>

      {/* Resume Section */}
      <section className="py-28 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
                <span className="text-2xl mr-2">📋</span>
                <span className="text-gray-700 font-semibold">이력서</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Profile
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                AI/ML 모델링부터 웹 서비스 구현까지, 검증된 실무 경험과 성과를 바탕으로 한 종합적인 개발 역량
              </p>
            </div>

            {/* Personal Info */}
            <div className="mb-16 p-10 bg-white rounded-3xl shadow-2xl border-2 border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <ProfileImage
                    src="/images/사진.jpg"
                    alt="김지민 프로필 사진"
                    fallbackText="김"
                    size="lg"
                    variant="resume"
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">김지민</h3>
                    <p className="text-lg text-purple-600 font-semibold"> AI/ML 엔지니어</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📧</span>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">이메일</p>
                        <p className="text-gray-800 font-semibold">kzm0502@naver.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📱</span>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">전화번호</p>
                        <p className="text-gray-800 font-semibold">+82-10-8652-0705</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📍</span>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">위치</p>
                        <p className="text-gray-800 font-semibold">경기도 안양시, 대한민국</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">💼</span>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">전공</p>
                        <p className="text-gray-800 font-semibold">수학과 (경상국립대학교) - 졸업</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-4">🎓</span>
                <h3 className="text-3xl font-bold text-gray-900">학력</h3>
              </div>
              <div className="space-y-6">
                <div className="group p-8 bg-white rounded-3xl shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">경상국립대학교 수학과</h4>
                        <p className="text-lg text-blue-600 font-semibold">2019.03 - 2025.02 (졸업)</p>
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-full text-sm font-bold">
                        학사학위 취득
                      </span>
                    </div>
                    <div className="mb-6">
                      <h5 className="text-lg font-bold text-gray-800 mb-3">🔍 수학적 기반의 개발 역량</h5>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>순수 수학의 논리적 사고와 체계적 접근법</strong>을 개발 프로세스에 적용하여, 복잡한 문제를 구조화하고 효율적인 해결책을 도출합니다. <strong>선형대수와 수치해석학을 활용한 알고리즘 최적화</strong>, 확률통계 기반의 데이터 모델링으로 <strong>정확도 92%의 AI 추천 시스템</strong>과 <strong>F1 Score 0.78의 ML 예측 모델</strong>을 구현한 실무 경험을 보유하고 있습니다.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        특히, <strong>금융데이터분석 전공을 통해 실제 비즈니스 문제를 수학적으로 접근</strong>하는 역량을 기르며, RAG 아키텍처에서 <strong>벡터 임베딩 최적화와 유사도 계산 알고리즘을 직접 설계</strong>하여 할루시네이션을 80% 감소시킨 성과를 달성했습니다. 이론과 실무를 연결하는 <strong>수학 기반 문제 해결 전문가</strong>입니다.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-600 font-medium mb-3">📚 전공 과목:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">선형대수학</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">확률과통계</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">수치해석학</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">금융데이터분석</span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-lg text-sm font-medium">미분방정식</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium">정수론</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">🏫</span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">마산 중앙고등학교</h4>
                      <p className="text-gray-600 font-medium">2016.03 - 2019.02</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-4">💼</span>
                <h3 className="text-3xl font-bold text-gray-900">경력 & 활동</h3>
              </div>
              <div className="space-y-8">
                <div className="group p-8 bg-white rounded-3xl shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-300 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">SK네트웍스 Family AI 캠프</h4>
                        <p className="text-lg text-orange-600 font-semibold">2025.03 - 2025.09 (7개월)</p>
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-bold">
                        AI 전문 교육
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <p className="text-gray-700 font-medium">AI 모델 설계부터 웹 서비스 배포까지 <strong>엔드투엔드 개발 역량</strong> 구축</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <p className="text-gray-700 font-medium"><strong>4개 실무 프로젝트</strong> 완료 및 고용노동부장관상 수상</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <p className="text-gray-700 font-medium">팀 프로젝트 리더십 및 <strong>협업 역량</strong> 강화</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group p-8 bg-white rounded-3xl shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-purple-300 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">AI/풀스택 프로젝트 개발</h4>
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-bold">
                        개인 프로젝트
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                        <h5 className="font-bold text-blue-800 mb-2">🏠 고향으로 ON (수상작)</h5>
                        <p className="text-sm text-blue-700">RAG + 멀티 에이전트 AI</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                        <h5 className="font-bold text-green-800 mb-2">🛍️ AI 의류 추천</h5>
                        <p className="text-sm text-green-700">YOLO + Fashion-CLIP</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200">
                        <h5 className="font-bold text-orange-800 mb-2">🤖 RAG 여행 추천</h5>
                        <p className="text-sm text-orange-700">할루시네이션 80% 감소</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                        <h5 className="font-bold text-purple-800 mb-2">📊 ML 이탈률 예측</h5>
                        <p className="text-sm text-purple-700">F1 Score 0.78 달성</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start">
                    <span className="text-4xl mr-4">🎯</span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">빅데이터 혁신융합대학</h4>
                      <p className="text-green-600 font-semibold mb-2">2023.08 - 마이크로디그리 이수</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">금융데이터분석MD</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">데이터 분석 기초</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">ML 기초 역량</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-4">🏆</span>
                <h3 className="text-3xl font-bold text-gray-900">수상 경력 & 자격증</h3>
              </div>
              <div className="space-y-8">
                <div className="group p-10 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-3xl shadow-2xl border-2 border-yellow-200 hover:shadow-3xl hover:-translate-y-3 hover:border-yellow-300 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                      🥉
                    </div>
                  </div>
                  <div className="pr-24">
                    <div className="mb-4">
                      <h4 className="text-3xl font-black text-gray-900 mb-2">고용노동부장관상 장려상</h4>
                      <p className="text-lg text-orange-700 font-bold">2025.09 • KDT 해커톤 수상작</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-lg text-gray-700 font-semibold mb-3">🎯 수상 프로젝트: "고향으로 ON - AI 정착 코디네이터"</p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">✅</span>
                          <span className="text-gray-700 font-medium">RAG 기반 멀티 에이전트 AI 시스템 구축</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">✅</span>
                          <span className="text-gray-700 font-medium">지역 특화 데이터 500개 이상 크롤링 및 표준화</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">✅</span>
                          <span className="text-gray-700 font-medium">고연령층 접근성 강화를 위한 STT + 챗봇 인터페이스</span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full shadow-lg">
                      🏆 정부 공식 인정 수상작
                    </div>
                  </div>
                </div>

                <div className="group p-8 bg-white rounded-3xl shadow-lg border-2 border-blue-100 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg mr-6">
                          📊
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">SQLD (SQL Developer)</h4>
                          <p className="text-lg text-blue-600 font-semibold mb-2">2025.04 취득</p>
                          <p className="text-gray-700 font-medium">체계적 DB 설계 및 SQL 쿼리 최적화 역량 검증</p>
                        </div>
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-bold">
                        자격증
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              기술 스택
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* AI/ML */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🤖 AI/ML</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Python</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 5 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Scikit-learn</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">OpenAI GPT</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">LangChain</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 5 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Machine Learning</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Frontend */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🌐 Frontend</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">React Native</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Streamlit</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">JavaScript</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">HTML/CSS</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Expo</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⚙️ Backend</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Django</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 5 ? 'bg-purple-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">FastAPI</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-purple-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">MySQL</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-purple-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Chroma Vector DB</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-purple-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Airflow</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-purple-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">☁️ DevOps & Tools</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">AWS EC2</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Docker</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">GitHub Actions</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Nginx</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Git</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
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