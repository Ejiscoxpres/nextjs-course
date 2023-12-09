import Link from 'next/link';

export default function ClientPage(){

    const clients =[
        {id:"eji",name:"Ejike"},
        {id:"ejik",name:"Ejikeme"},
    ];
    return(
        <div>
            <h1>The Client Page</h1>
            <ul>
                <li><Link href="/clients/eji">Ejike</Link></li>

                <li><Link href="/clients/ejik">Ejikeme</Link></li>
            </ul>
        </div>
    );
}