import React from 'react';
import Link from 'next/link';

const ContactFooter = () => {
  return (
    <footer className="mt-12 border-t-2 border-gray-500 dark:border-gray-50  text-white dark:text-gray-200 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mensaje de invitación */}
          <div className="md:col-span-2 ">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-orange-900">¡Trabajemos juntos!</h2>
            <p className=" dark:text-gray-300 text-lg mb-6 text-gray-600">
              ¿Tienes un proyecto en mente o quieres discutir oportunidades? Estoy listo para colaborar y crear algo extraordinario contigo.
            </p>
            <p className=" dark:text-gray-300 text-gray-500">
              Envíame un mensaje y hablemos sobre cómo puedo ayudarte a hacer realidad tus ideas.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange-900 dark:text-white">Contáctame</h3>
            
            {/* WhatsApp */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-500 dark:bg-green-600 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.392 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div>
                <p className="text-orange-400 dark:text-gray-400">WhatsApp</p>
                <Link href="https://wa.me/573133057451" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-100 hover:text-orange-400 dark:hover:text-blue-400 font-medium transition-colors">
                    +57 3133057451
                  </a>
                </Link>
              </div>
            </div>
            
            {/* Correo electrónico */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-400 dark:bg-blue-600 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </div>
              <div>
                <p className="text-orange-400 dark:text-gray-400">Correo electrónico</p>
                <Link href="mailto:sagp758@gmail.com" passHref legacyBehavior>
                  <a className="text-gray-500 dark:text-gray-100 hover:text-orange-400 dark:hover:text-blue-400 font-medium transition-colors">
                    sagp758@gmail.com
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-12 pt-8 border-t border-blue-800 dark:border-gray-700 text-center text-gray-400 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Todos los derechos reservados. Diseñado con pasión.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;