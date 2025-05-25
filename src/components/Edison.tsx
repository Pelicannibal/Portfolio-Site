export const Edison = ({ active, onClick }: any) => (
  <div className={`fixed ${active ? 'top-4 right-4' : 'bottom-4 left-4'} w-20 h-20 z-50 transition-all`} onClick={onClick}>
    <img src="/edison.png" alt="Edison" className="w-full h-full object-contain" />
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-tooltip px-2 py-1 rounded-md text-xs whitespace-nowrap">
      How can I help?
    </div>
  </div>
);