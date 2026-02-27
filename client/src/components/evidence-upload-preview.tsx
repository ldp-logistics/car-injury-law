import { Smartphone, UploadCloud, FileCheck, Lock } from "lucide-react";
import { motion } from "framer-motion";

export function EvidenceUploadPreview() {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold mb-6">
              <Lock className="h-4 w-4" />
              Secure Client Portal
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              Manage Your Case From Your Phone
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              No need to drive to our office to drop off paperwork. Our secure app allows you to upload photos, sign documents, and chat with your attorney instantly.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Instant Photo Upload", desc: "Upload crash scene photos directly from your camera roll." },
                { title: "E-Sign Documents", desc: "Sign important legal forms with a single tap." },
                { title: "Real-Time Updates", desc: "Get push notifications when your case status changes." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-secondary font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
            
            {/* Phone Mockup */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-800 rounded-b-xl z-20"></div>
              
              {/* Screen Content */}
              <div className="flex-1 bg-slate-50 p-4 pt-12 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                      <UploadCloud className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-800">Upload Success</p>
                      <p className="text-xs text-gray-500">crash_photos_01.jpg</p>
                    </div>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-green-500"
                    />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <FileCheck className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-800">Document Signed</p>
                      <p className="text-xs text-gray-500">Representation_Agreement.pdf</p>
                    </div>
                  </div>
                </div>

                 <div className="mt-auto bg-primary text-white p-4 rounded-xl shadow-lg">
                   <p className="text-xs opacity-70 mb-1">Case Status</p>
                   <p className="font-bold text-lg">Negotiation Phase</p>
                   <p className="text-xs mt-2 flex items-center gap-1 text-green-300">
                     <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                     Action Required: None
                   </p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}