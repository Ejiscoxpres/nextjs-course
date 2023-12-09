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
                {clients.map((client) =>(
                    <li key = {client.id}>
                
                        <Link href={{
                            pathname: '/clients/[id]',
                            query:{id:client.id},
                            
                        }}>{client.name}</Link>

                    </li>
                ))}
            </ul>
        </div>
    );
}