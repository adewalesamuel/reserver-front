export function ErrorMessages(props) {
    return (
        <div className='my-4 w-full'>
                {props.children instanceof Array ? 
                      props.children.map((item, index) => {
                          return (
                            <div className='text-red-800 bg-red-200 rounded-md p-4 mb-2'>
                              <strong key={index} className="block">{item}</strong>
                            </div>
                          )
                      }) : 
                            <div className='text-red-800 bg-red-200 rounded-md p-4'>
                              <strong className="block">{props.children}</strong>
                            </div>
                }
        </div>
    )
    
}