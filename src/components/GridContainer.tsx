const GridContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-pureWhite rounded-lg">
      {children}
    </div>
)

export default GridContainer