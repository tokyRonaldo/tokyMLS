//import './loading.css';

export default function Loading(){
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-white z-1000000" >
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
    )
}