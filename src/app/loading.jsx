import './loading.css';

export default function Loading(){
    return(
        <div className="loading flex items-center justify-center inset-0" >
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
    )
}