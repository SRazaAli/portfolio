import { mySocials } from "../Constants"

const Footer = () => {
    return (
        <section className='flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space mb-1'>
            <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-4 h-[1px] w-full' />
            <div className='flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3'>
                {mySocials.map((socialItem, index) => (
                    <a key={index} href={socialItem.href}>
                        <img src={socialItem.icon} alt={socialItem.name} className="w-5 h-5" />
                    </a>
                ))}
            </div>
            <p>© 2025 Raza. All rights reserved.</p>
        </section>
    )
}

export default Footer
