import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio - 김지민 | 프로젝트 전시",
  description: "AI/ML 엔지니어 김지민의 프로젝트 포트폴리오. 고용노동부장관상 수상작, AI/ML 기반 서비스, 풀스택 웹 애플리케이션 등 실무 프로젝트들을 확인하세요.",
};

export default function Portfolio() {
  const projects = [
    {
      title: "🏠 고향으로 ON - AI 정착 코디네이터",
      description: "고용노동부장관상 장려상을 수상한 RAG 기반 AI 정착 코디네이터 플랫폼입니다. 퇴직을 맞이한 50~64세 장년층의 고향 정착을 지원하는 멀티 에이전트 AI 시스템으로, LangGraph 기반 5개 전문 에이전트가 개인 맞춤형 미션을 추천하고 STT+챗봇으로 디지털 취약계층의 접근성을 강화했습니다.",
      technologies: ["Python", "FastAPI", "GPT-4", "LangGraph", "RAG", "Chroma Vector DB", "React Native", "AWS"],
      period: "2025.06 - 2025.09 (3개월)",
      achievements: ["2025년 제7회 K-디지털 트레이닝 해커톤 지정과제 장려상(고용노동부장관상) 수상", "LangGraph 기반 멀티 에이전트 AI 시스템 개발", "멀티 에이전트 AI 구조로 의도 분석 정확도 85% 이상 달성", "함안군 지역 특화 데이터 300개 이상 크롤링 및 표준화"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "/images/고향으로ON.png",
      category: "award",
      status: "수상작"
    },
    {
      title: "🛍️ Ivle Malle - AI 기반 의류 추천 플랫폼",
      description: "LangGraph 기반 멀티 에이전트 시스템과 YOLOv8 + Fashion-CLIP을 결합한 이미지 기반 의류 추천 플랫폼입니다. 3단계 개인화 추천 알고리즘(스타일 → 체형 협업필터링 → 색상)을 통해 20,000여 개의 의류 데이터에서 최적의 상품을 추천하며, OAuth2 기반 소셜 로그인과 AWS 클라우드 인프라를 구축했습니다.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "OpenAI GPT-4", "YOLOv8", "Fashion-CLIP", "Qdrant Vector DB", "AWS", "Docker", "OAuth2"],
      period: "2025.07 - 2025.09 (2개월)",
      achievements: ["LangGraph 멀티 에이전트 챗봇으로 사용자 만족도 40% 향상", "YOLO + Fashion-CLIP 이미지 검색으로 기존 텍스트 검색 대비 정확도 65% 개선", "FastAPI 최적화로 평균 응답시간 0.3초 달성", "20,000여 개 패션 데이터 벡터화 및 실시간 추천 시스템 구축"],
      githubUrl: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-FINAL-2TEAM",
      liveUrl: "#",
      imageUrl: "/images/IvleMalle.png",
      category: "ai",
      status: "완료"
    },
    {
      title: "🤖 여행나래 - RAG 기반 여행 코스 추천 AI",
      description: "도슨트의 전문적인 해설과 여행 가이드의 실용적인 안내를 융합하여, 사용자의 현재 위치, 날씨, 개인 관심사를 종합 분석해 최적의 문화유산 및 여행 코스를 추천하는 LLM + RAG 기반 플랫폼입니다. 자연어 기반 대화형 AI 도슨트가 풍부한 정보 접근성을 제공합니다.",
      technologies: ["Python", "OpenAI GPT", "LangChain", "RAG", "Streamlit", "Folium", "Chroma Vector DB" , "Opne Weather API"],
      period: "2025.06.27 - 2025.06.30 (4일)",
      achievements: ["RAG 아키텍처로 LLM 할루시네이션 현상 80% 감소", "답변 신뢰도 88%, 추천 만족도 92% 달성", "실시간 위치·날씨·관심사 데이터 기반 맞춤형 추천", "자연어 기반 대화형 AI 도슨트 인터페이스 구현"],
      githubUrl: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-3rd-5Team",
      liveUrl: "#",
      imageUrl: "/images/여행나래.png",
      category: "ai",
      status: "완료"
    },
    {
      title: "📊 MOOC 학습자 이탈률 예측 ML 모델",
      description: "MOOC 플랫폼에서 학습자의 행동 로그 및 인구통계 데이터를 기반으로 학습 중도 이탈 위험을 예측하는 AI 모델입니다. CatBoost 모델과 SMOTE 기법을 활용해 데이터 불균형 문제를 해결하고, Streamlit 기반 실시간 대시보드로 교수설계자의 선제적 학생 관리를 지원합니다.",
      technologies: ["Python", "CatBoost", "SMOTE", "scikit-learn", "Streamlit", "pandas", "GridSearchCV"],
      period: "2025.05.14 - 2025.05.16 (3일)",
      achievements: ["CatBoost 모델 F1 Score 0.78, Recall 0.85, Precision 0.72 달성", "위험 학습자 식별률 20% 향상", "SMOTE 기법으로 데이터 불균형 해결", "Streamlit 실시간 대시보드 단독 구현"],
      githubUrl: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-2nd-3TEAM",
      liveUrl: "#",
      imageUrl: "/images/Mooc.png",
      category: "ml",
      status: "완료"
    },
    {
      title: "🎵 Moodify - 감정/날씨 기반 음악 추천",
      description: "사용자의 현재 감정과 실시간 날씨 등 정서적 맥락을 AI가 분석하여 최적의 음악을 추천하는 웹 서비스입니다. LLM(GPT)을 활용해 추천 이유를 자연스러운 문장으로 설명하고, 다양한 외부 API(Spotify, Last.fm, OpenWeather, OpenAI)를 연동하여 차별화된 음악 큐레이션 경험을 제공합니다.",
      technologies: ["Django", "OpenAI GPT", "Spotify API", "Last.fm API", "OpenWeather API", "AWS EC2", "Nginx", "Gunicorn", "GitHub Actions"],
      period: "2025.07.18 - 2025.07.22 (5일)",
      achievements: ["복합 조건(감정+날씨) 기반 음악 추천 시스템 구축", "추천 정확도 15% 향상 (복합 조건 필터링 최적화)", "GitHub Actions CI/CD 자동 배포 파이프라인 구축", "다중 API 연동으로 End-to-End 서비스 5일 만에 완성"],
      githubUrl: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-4th-2Team",
      liveUrl: "#",
      imageUrl: "/images/Moodify.png",
      category: "ai",
      status: "완료"
    },
    {
      title: "🚗 연두색 번호판 정책 영향 분석",
      description: "2024년 1월 1일부터 시행된 '연두색 번호판 정책'이 법인 슈퍼카 시장에 미친 영향을 데이터 기반으로 분석한 프로젝트입니다. 국토교통부 통계, 한국수입자동차협회 데이터와 SNS 여론 분석을 통해 정책의 실효성과 사회적 영향을 다각도로 검증했습니다.",
      technologies: ["Python", "웹 크롤링", "Streamlit", "데이터 시각화", "Sentiment Analysis", "pandas"],
      period: "2025.04 (2일)",
      achievements: ["맥라렌 85%, 벤틀리 65% 등 주요 슈퍼카 브랜드 법인차 등록 급감 수치로 증명", "SNS 감성 분석으로 긍정/부정 여론 핵심 키워드 파악", "Streamlit 대시보드로 정책 전후 시장 변화 시각화", "정량 데이터와 비정형 텍스트 데이터 통합 분석"],
      githubUrl: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN13-1st-5TEAM",
      liveUrl: "#",
      imageUrl: "/images/연두색번호판.png",
      category: "data",
      status: "완료"
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-100 to-indigo-100 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <span className="text-3xl mr-3">💼</span>
              <span className="text-gray-700 font-bold text-lg">프로젝트 포트폴리오</span>
            </div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-2xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              "아이디어를 현실로 만드는 개발자의 여정"
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold">
            <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full shadow-md">
              🏆 고용노동부장관상 수상
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full shadow-md">
              🚀 6개 실무 프로젝트
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full shadow-md">
              🤖 AI/ML 전문 기술
            </span>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {
              [
                { icon: "🏆", value: "1개", desc: "정부 수상작", detail: "고용노동부장관상" },
                { icon: "🚀", value: "6개", desc: "실무 프로젝트", detail: "AI/ML 및 풀스택" },
                { icon: "📊", value: "92%", desc: "최고 만족도", detail: "AI 추천 서비스" },
                { icon: "⚡", value: "40%", desc: "성능 향상", detail: "추천 정확도 개선" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group text-center p-6 rounded-3xl bg-white shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:-translate-y-3 hover:border-cyan-300 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <p className="text-lg font-bold text-gray-800 mb-1">
                      {stat.desc}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
              <span className="text-2xl mr-2">💻</span>
              <span className="text-gray-700 font-semibold">주요 프로젝트</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Featured Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI/ML 기술을 활용한 실무 프로젝트들로, 각각 검증된 성과와 기술적 도전을 담고 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                period={project.period}
                achievements={project.achievements}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                imageUrl={project.imageUrl}
                category={project.category}
                status={project.status}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full shadow-lg mb-6">
                <span className="text-3xl mr-3">🚀</span>
                <span className="text-gray-700 font-bold text-lg">다음 프로젝트</span>
              </div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                함께 만들어요!
              </span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              새로운 프로젝트나 협업 기회가 있으시면 언제든 연락주세요. <br/>
              <strong className="text-indigo-600">함께 혁신적인 아이디어를 현실로 만들어가요!</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI/ML 프로젝트</h3>
                <p className="text-gray-600">데이터 분석부터 모델 배포까지</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">풀스택 개발</h3>
                <p className="text-gray-600">웹/모바일 애플리케이션</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">데이터 솔루션</h3>
                <p className="text-gray-600">비즈니스 인사이트 도출</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-3">💬</span>
                프로젝트 제안하기
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://github.com/Gogimin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white border-2 border-indigo-300 text-indigo-700 rounded-2xl font-bold text-lg shadow-lg hover:bg-indigo-50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-3">💻</span>
                GitHub 확인
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}