import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <span className="text-2xl mr-2">👋</span>
              <span className="text-gray-700 font-medium">안녕하세요!</span>
            </div>
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI/ML 모델링과 웹 서비스 구현을 연결하는
            </span>
          </p>
          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              신입 개발자 김지민입니다
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-orange-600">🏆 교육노동부장관상 수상</span> ·
            <span className="font-semibold text-green-600"> 📊 92% 추천 만족도</span> ·
            <span className="font-semibold text-blue-600"> ⚡ 20% 성능 향상</span><br/>
            <span className="text-gray-700 font-medium">프론트엔드부터 AI 모델링까지 전 과정을 주도하는 엔드투엔드 개발 역량</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/portfolio"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>🚀</span>
              <span>프로젝트 보기</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white border-2 border-purple-300 text-purple-700 rounded-2xl font-bold shadow-lg hover:bg-purple-50 hover:border-purple-400 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>💬</span>
              <span>연락하기</span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-28 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-2xl mr-2">⚡</span>
              <span className="text-gray-700 font-semibold">기술 스택</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tech Stack & Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              실무 프로젝트에서 직접 사용하고 검증된 기술들로 구성된 스택입니다
            </p>
          </div>
          
          {/* 실전 기술 태그들 */}
          <div className="space-y-4 mb-16">
            {/* 첫 번째 줄 - AI/ML 스택 */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "Python", level: "실무" }, { name: "Scikit-learn", level: "실무" }, { name: "OpenAI GPT", level: "실무" },
                { name: "LangChain", level: "고급" }, { name: "Machine Learning", level: "중급" }
              ].map((tech, i) => (
                <span
                  key={i}
                  className="group px-5 py-3 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 hover:border-purple-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <span className="font-bold">{tech.name}</span>
                  <span className="text-xs ml-2 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    {tech.level}
                  </span>
                </span>
              ))}
            </div>

            {/* 두 번째 줄 - 웹 개발 스택 */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "React Native", level: "중급" }, { name: "Expo", level: "중급" }, { name: "Django", level: "고급" },
                { name: "FastAPI", level: "중급" }, { name: "MySQL", level: "실무" }
              ].map((tech, i) => (
                <span
                  key={i}
                  className="group px-5 py-3 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 hover:border-purple-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <span className="font-bold">{tech.name}</span>
                  <span className="text-xs ml-2 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    {tech.level}
                  </span>
                </span>
              ))}
            </div>

            {/* 세 번째 줄 - DevOps & 인프라 */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "Chroma Vector DB", level: "중급" }, { name: "AWS EC2", level: "실무" }, { name: "Docker", level: "기초" },
                { name: "Airflow", level: "중급" }, { name: "GitHub Actions", level: "기초" }
              ].map((tech, i) => (
                <span
                  key={i}
                  className="group px-5 py-3 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 hover:border-purple-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <span className="font-bold">{tech.name}</span>
                  <span className="text-xs ml-2 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    {tech.level}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* 스킬 카테고리 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "AI/ML",
                icon: "🤖",
                color: "blue",
                skills: ["Python, Scikit-learn", "OpenAI GPT, LangChain", "RAG 아키텍처", "Machine Learning"],
                highlight: "92% 추천 만족도"
              },
              {
                name: "Frontend",
                icon: "🌐",
                color: "green",
                skills: ["React Native, Expo", "Streamlit 대시보드", "JavaScript(ES6)", "HTML/CSS"],
                highlight: "크로스 플랫폼 개발"
              },
              {
                name: "Backend",
                icon: "⚙️",
                color: "purple",
                skills: ["Django, FastAPI", "MySQL, Chroma Vector DB", "Airflow DAG", "API 설계"],
                highlight: "20개 테이블 정규화"
              },
              {
                name: "DevOps",
                icon: "☁️",
                color: "orange",
                skills: ["AWS EC2, S3", "Docker, CI/CD", "GitHub Actions", "Nginx, Gunicorn"],
                highlight: "실제 서비스 배포"
              },
            ].map((skill, i) => (
              <div
                key={i}
                className={`group p-8 rounded-3xl bg-white shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden ${
                  skill.color === 'blue' ? 'hover:border-blue-300' :
                  skill.color === 'green' ? 'hover:border-green-300' :
                  skill.color === 'purple' ? 'hover:border-purple-300' :
                  skill.color === 'orange' ? 'hover:border-orange-300' :
                  'hover:border-gray-300'
                }`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  skill.color === 'blue' ? 'bg-gradient-to-br from-blue-50/50 to-transparent' :
                  skill.color === 'green' ? 'bg-gradient-to-br from-green-50/50 to-transparent' :
                  skill.color === 'purple' ? 'bg-gradient-to-br from-purple-50/50 to-transparent' :
                  skill.color === 'orange' ? 'bg-gradient-to-br from-orange-50/50 to-transparent' :
                  'bg-gradient-to-br from-gray-50/50 to-transparent'
                }`}></div>
                <div className="relative z-10">
                  <div className={`text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {skill.name}
                  </h3>
                  <div className={`text-sm font-bold text-white mb-4 px-4 py-2 rounded-full inline-block shadow-md ${
                    skill.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    skill.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                    skill.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                    skill.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                    'bg-gradient-to-r from-gray-500 to-gray-600'
                  }`}>
                    {skill.highlight}
                  </div>
                  <ul className="text-gray-600 space-y-3">
                    {skill.skills.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full shadow-sm ${
                          skill.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                          skill.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-500' :
                          skill.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-purple-500' :
                          skill.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-orange-500' :
                          'bg-gradient-to-r from-gray-400 to-gray-500'
                        }`}></span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <span className="text-2xl mr-2">🚀</span>
              <span className="text-gray-700 font-semibold">주요 프로젝트</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              대표 프로젝트 간략 소개
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "🏠 고향으로 ON",
                desc: "RAG 기반 AI 정착 코디네이터",
                tag: "고용노동부장관상",
                tech: ["FastAPI", "GPT-4", "RAG", "React Native"],
                status: "수상작"
              },
              {
                title: "🛍️ AI 의류 추천",
                desc: "YOLO + Fashion-CLIP 기반 개인화 추천 플랫폼",
                tag: "추천 정확도 40% 향상",
                tech: ["YOLOv8", "Fashion-CLIP", "Qdrant", "AWS"],
                status: "완료"
              },
              {
                title: "🤖 RAG 여행 추천",
                desc: "할루시네이션 80% 감소한 AI 여행 코스 추천",
                tag: "만족도 92%",
                tech: ["OpenAI GPT", "LangChain", "RAG", "Streamlit"],
                status: "완료"
              },
              {
                title: "📊 학습자 이탈 예측",
                desc: "CatBoost + SMOTE 기반 ML 모델 & 대시보드",
                tag: "F1 Score 0.78",
                tech: ["CatBoost", "SMOTE", "Streamlit", "pandas"],
                status: "완료"
              }
            ].map((project, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border-2 border-gray-200 bg-white hover:shadow-xl hover:-translate-y-2 hover:border-purple-300 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="mb-4">
                    <span className={`inline-block text-xs px-3 py-1 rounded-full font-bold shadow-sm ${
                      project.status === '수상작'
                        ? 'bg-gradient-to-r from-yellow-100 to-orange-200 text-orange-700'
                        : 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700'
                    }`}>
                      {project.tag}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-500 rounded-lg">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <a
              href="/portfolio"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">📋</span>
              <span>전체 프로젝트 보기</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Achievements & Process Section */}
      <section className="py-28 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6">
              <span className="text-2xl mr-2">🏆</span>
              <span className="text-gray-700 font-semibold">성과 & 경험</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Achievements & Experience
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "🏆", value: "교육노동부장관상", desc: "장려상 수상", detail: "지방소멸 위기해소 AI 어플리케이션" },
              { icon: "📊", value: "92%", desc: "추천 만족도", detail: "AI 여행 추천 서비스 사용자 평가" },
              { icon: "⚡", value: "20%", desc: "성능 향상", detail: "ML 이탈률 예측 모델 식별률 개선" },
            ].map((achievement, i) => (
              <div
                key={i}
                className="group text-center p-8 rounded-3xl bg-white shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:-translate-y-3 hover:border-green-300 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
                    {achievement.value}
                  </div>
                  <p className="text-lg font-bold text-gray-800 mb-3">
                    {achievement.desc}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    {achievement.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Problem Solving Approach */}
          <div className="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-lg border-2 border-gray-100">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              문제 해결 접근법
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "분석", desc: "수학적 사고로 문제를 정확히 파악", color: "from-green-500 to-green-600" },
                { step: "2", title: "설계", desc: "확장 가능한 아키텍처 설계", color: "from-blue-500 to-blue-600" },
                { step: "3", title: "구현", desc: "클린 코드와 테스트 기반 개발", color: "from-purple-500 to-purple-600" },
                { step: "4", title: "개선", desc: "사용자 피드백 기반 지속적 개선", color: "from-pink-500 to-pink-600" },
              ].map((process, i) => (
                <div key={i} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {process.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
