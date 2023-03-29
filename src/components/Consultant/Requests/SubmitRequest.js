import React from 'react'
import {NavLink} from 'react-router-dom'
import {CgDanger} from 'react-icons/cg'


function SubmitRequest(props) {
    
    return (
        <div className='ml-12 justify-center absolute'>
            <div className="flex items-center  h-screen">
                <div className="p-1 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 w-[500px]">
                    <div className="flex flex-col items-center p-4 space-y-2 bg-white rounded-lg">
                        {
                            props.notApproved ? <CgDanger size={60} style={{color:'red'}}/> :
                             <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                        }
                       
                        <h1 className="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">{props.top}</h1>
                        <p className='text-center font-semibold'>{props.status} <br /> {props.explanation}</p>

                        <div className=''>
                            <NavLink to='/' className="inline-flex items-center m-5 px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                                <span className="text-sm font-medium">
                                    Home
                                </span>
                            </NavLink>
                            <NavLink onClick={props.onclick} className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                                <span className="text-sm font-medium">
                                    {props.button}
                                </span>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitRequest