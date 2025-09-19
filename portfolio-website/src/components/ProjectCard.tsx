'use client';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  period?: string;
  achievements?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  category?: string;
  status?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  period,
  achievements,
  githubUrl,
  liveUrl,
  imageUrl,
  category,
  status
}: ProjectCardProps) {
  console.log('ProjectCard props:', { title, imageUrl, category });
  const getCategoryGradient = () => {
    switch (category) {
      case 'award':
        return 'from-yellow-500 via-orange-500 to-red-500';
      case 'ai':
        return 'from-blue-500 via-cyan-500 to-teal-500';
      case 'ml':
        return 'from-purple-500 via-indigo-500 to-blue-500';
      default:
        return 'from-gray-500 via-slate-500 to-gray-600';
    }
  };

  const getCategoryIcon = () => {
    switch (category) {
      case 'award':
        return '🏆';
      case 'ai':
        return '🤖';
      case 'ml':
        return '📊';
      default:
        return '⚡';
    }
  };

  return (
    <div className="group bg-white rounded-3xl shadow-xl border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-3 hover:border-indigo-300 transition-all duration-500 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Project Header */}
      <div className={`h-80 bg-gradient-to-br ${getCategoryGradient()} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover relative z-10"
            onLoad={() => {
              console.log('Image loaded successfully:', imageUrl);
            }}
            onError={() => {
              console.log('Image failed to load:', imageUrl);
            }}
          />
        ) : (
          <div className="text-6xl text-white opacity-90 relative z-10">{getCategoryIcon()}</div>
        )}

        {/* Status Badge */}
        {status && (
          <div className="absolute top-4 left-4">
            <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
              status === '수상작'
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                : status === '완료'
                ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                : status === '개발 예정'
                ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white'
                : 'bg-white/90 text-gray-700'
            }`}>
              {status}
            </span>
          </div>
        )}

        {/* Period Badge */}
        {period && (
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
            {period}
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-8 relative z-10">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">{title}</h3>
          <p className="text-gray-700 leading-relaxed text-base">{description}</p>
        </div>

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">🎯</span>
              주요 성과
            </h4>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start font-medium">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-gray-600 mb-3">🛠️ 기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-2 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 text-sm rounded-xl border border-indigo-100 font-medium hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-4 px-6 rounded-2xl font-bold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <span className="mr-2">💻</span>
              GitHub
              <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-4 px-6 rounded-2xl font-bold hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <span className="mr-2">🚀</span>
              Live Demo
              <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {(!githubUrl || githubUrl === '#') && (!liveUrl || liveUrl === '#') && (
            <div className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-500 text-center py-4 px-6 rounded-2xl font-bold flex items-center justify-center">
              <span className="mr-2">🔒</span>
              비공개 프로젝트
            </div>
          )}
        </div>
      </div>
    </div>
  );
}