import { useParams } from "react-router-dom";

const Mypage = () =>{
    const params = useParams();
    console.log(params);
    return <div>Mypage page {params.id}</div>
}
export default Mypage;