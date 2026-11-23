
import plan from '../../assets/images/plan.png';
import wapp from '../../assets/images/wapp.svg'

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-orange-100 bg-orange-50 pr-8 md:flex-row">
         <img  src={plan} className=" max-w-full rounded-l-2xl" />
     <div className="text-center md:text-left">
          <h2 className=" text-3xl font-bold text-maroon">
            Plan Your Next <span className="text-saffron">Journey</span>
          </h2>
          <p className="mt-1 text-neutral-700">Talk to our travel expert and get the best options for you.</p>
        </div>
        <a href="https://wa.me/919082686465" target="_blank"
           className="flex items-center gap-2 rounded-full bg-saffron px-8 py-4 font-semibold text-white hover:bg-saffron-dark">
         <img src={wapp} alt="WhatsApp" className="h-6 w-6" /> Enquire on WhatsApp
        </a>
      </div>
    </section>
  )
}