import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

type Props = {}

const Error404 = (props: Props) => {
  return (
    <section className="bg-white">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center flex-col lg:gap-12">
            <div className="wf-ull lg:w-1/2 text-center">
                <p className="text-sm font-medium text-blue-500 ">404 error</p>
                <h1 className="mt-2 text-2xl font-semibold text-gray-800">Page not found</h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn&apos;t exist.</p>

                <div className="flex items-center justify-center mt-6 gap-x-3">
                    <Link href="/" className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                        Take me home
                    </Link>
                </div>
            </div>

            <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                <Image className="w-full max-w-lg lg:mx-auto" src="/svg/illustration.svg" alt="404 illustration" width={'200'} height={200}/>
            </div>
        </div>
    </section>
  )
}

export default Error404;