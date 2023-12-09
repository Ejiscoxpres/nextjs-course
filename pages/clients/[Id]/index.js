import {useRouter} from 'next/router'

export default function ClientProjectsPage(){
    function loadProjectHandler(){
        //load data...
        router.push('/clients/eji/projecta');

    }

    const router=useRouter();
    console.log(router.query);
    return(
        <div>
            <h1>The Project of a given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}