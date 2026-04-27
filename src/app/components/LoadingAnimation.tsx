export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-blue-700 font-semibold">Cargando ClínicaBI Pro...</p>
      </div>
    </div>
  );
}
