export default function CategorySkeleton() {
  return (
    <div className="w-full bg-background rounded-lg animate-pulse">
      <div className="p-5 flex flex-col gap-2">
        {/* Video Button Skeleton */}
        <div className="h-12 w-full bg-gray-200 rounded-md mb-2" />

        {/* Category List Skeletons */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col py-2">
            <div className="flex items-center justify-between px-2">
              {/* Category Name */}
              <div className="h-5 w-32 bg-gray-200 rounded" />
              {/* Chevron Placeholder */}
              <div className="h-4 w-4 bg-gray-100 rounded-full" />
            </div>
          </div>
        ))}

        {/* Bottom Label Skeleton */}
        <div className="h-10 w-24 bg-gray-100 rounded ml-2.5 mt-2" />
      </div>
    </div>
  );
}
