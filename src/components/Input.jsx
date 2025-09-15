export default function Input({children,isTextArea,forwt,type,placeholder,value,onchange}){
    return(

        <>
         <label htmlFor={forwt} className="">{children}</label>
         {isTextArea ? <textarea
         className="w-full rounded-sm bg-amber-900  text-white" placeholder={placeholder}
 value={value} onChange={onchange}         >  </textarea>:
            <input type={type} id={forwt} className="w-full rounded-sm bg-amber-900  text-white"
            
            value={value} onChange={onchange}
            />
            }

        </>
    )
}