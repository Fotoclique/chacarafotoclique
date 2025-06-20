import { useState } from 'react'
import { Calendar, MapPin, Phone, Mail, Users, Camera, Waves, TreePine, Star, Clock, CheckCircle, Zap } from 'lucide-react'
import './App.css'

// Importar imagens
import heroImage from './assets/Imagem-do-WhatsApp-de-2023-09-25-a--s--09.jpg'
import salaoImage from './assets/bac0c8a411b547433ba5c34879bc2011782f1053.jpg'
import quiosqueImage from './assets/208f7d4926666e6fa43966dab0e0f00f25266f8d.jpg'
import piscinaImage from './assets/ef94914202cd9c88d4d3e5cf5a2fc2d667f795d0.jpg'
import quiosque2Image from './assets/Prancheta7.png'
import piscina2Image from './assets/Prancheta2.png'
import barImage from './assets/Prancheta9.png'
import campoFutebolImage from './assets/campo-futebol.jpg'
import logoImage from './assets/logo.png'

function App() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [visitorName, setVisitorName] = useState('')
  const [visitorPhone, setVisitorPhone] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleScheduleVisit = () => {
    if (!selectedDate || !selectedTime || !visitorName || !visitorPhone) {
      alert('Por favor, preencha todos os campos para agendar sua visita.')
      return
    }

    const message = `Olá! Gostaria de agendar uma visita à Chácara Foto Clique.
    
Nome: ${visitorName}
Telefone: ${visitorPhone}
Data: ${new Date(selectedDate).toLocaleDateString('pt-BR')}
Horário: ${selectedTime}

Aguardo confirmação. Obrigado!`

    const whatsappUrl = `https://wa.me/5545998110015?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Chácara Foto Clique" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-gray-800">Chácara Foto Clique</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-orange-500 transition-colors">Início</a>
              <a href="#espacos" className="text-gray-700 hover:text-orange-500 transition-colors">Espaços</a>
              <a href="#galeria" className="text-gray-700 hover:text-orange-500 transition-colors">Galeria</a>
              <a href="#agendamento" className="text-gray-700 hover:text-orange-500 transition-colors">Agendar Visita</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Chácara <span className="text-orange-500">Foto Clique</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            O espaço perfeito para seus eventos especiais. Locação de chácara com infraestrutura completa, 
            piscinas, salões e áreas verdes em um ambiente único e sofisticado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#agendamento" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Agendar Visita
            </a>
            <a 
              href="#espacos" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Conhecer Espaços
            </a>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Piscinas</h3>
              <p className="text-gray-600">Piscinas adulto e infantil com borda infinita</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Salões</h3>
              <p className="text-gray-600">Salões climatizados para grandes eventos</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Área Verde</h3>
              <p className="text-gray-600">Amplos jardins e áreas de lazer ao ar livre</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Campo Suíço</h3>
              <p className="text-gray-600">Campo de futebol suíço para atividades esportivas</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Infraestrutura</h3>
              <p className="text-gray-600">Completa para eventos de todos os tipos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Espaços */}
      <section id="espacos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossos <span className="text-orange-500">Espaços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça cada ambiente da nossa chácara, pensado especialmente para proporcionar 
              momentos únicos e inesquecíveis em seus eventos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={salaoImage} 
                alt="Salão de Festas" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Salão de Festas</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nosso salão principal oferece ambiente climatizado e sofisticado, perfeito para 
                cerimônias, jantares e celebrações. Com capacidade para grandes eventos e 
                decoração elegante que se adapta ao seu estilo.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Ambiente climatizado
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Capacidade para grandes eventos
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Decoração sofisticada
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="lg:order-2">
              <img 
                src={quiosqueImage} 
                alt="Quiosque com Churrasqueira" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="lg:order-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Quiosque com Churrasqueira</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Área coberta ao ar livre com churrasqueira profissional, ideal para confraternizações 
                e eventos mais descontraídos. O ambiente rústico e aconchegante proporciona 
                momentos especiais em contato com a natureza.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Churrasqueira profissional
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Ambiente ao ar livre coberto
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Vista para áreas verdes
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={piscinaImage} 
                alt="Área da Piscina" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Piscina com Borda Infinita</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossa piscina principal com borda infinita oferece uma experiência única, 
                com vista panorâmica e design moderno. Perfeita para eventos diurnos e 
                momentos de relaxamento em família.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Borda infinita com vista panorâmica
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Piscina infantil integrada
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Deck amplo para relaxamento
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img 
                src={barImage} 
                alt="Bar Molhado" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="lg:order-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Bar Molhado</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bar molhado integrado à área da piscina, com estrutura completa para servir 
                drinks e petiscos. O ambiente sofisticado e funcional é perfeito para 
                eventos pool party e confraternizações.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Estrutura completa para drinks
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Integrado à área da piscina
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Design moderno e funcional
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-orange-500">Galeria</span> de Fotos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja mais detalhes dos nossos espaços através desta seleção de imagens 
              que mostram a beleza e sofisticação da Chácara Foto Clique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={heroImage} 
                alt="Vista aérea da chácara" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Vista Aérea</span>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={quiosque2Image} 
                alt="Quiosque" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Quiosque</span>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={piscina2Image} 
                alt="Piscina" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Piscina</span>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={salaoImage} 
                alt="Salão" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Salão</span>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={barImage} 
                alt="Bar Molhado" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Bar Molhado</span>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={piscinaImage} 
                alt="Área da Piscina" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Área da Piscina</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agendamento */}
      <section id="agendamento" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Agende sua <span className="text-orange-500">Visita</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Venha conhecer pessoalmente todos os nossos espaços. Agende uma visita 
                e descubra por que a Chácara Foto Clique é o local perfeito para seu evento.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Dados da Visita</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefone/WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={visitorPhone}
                        onChange={(e) => setVisitorPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Data da Visita
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Horário Preferido
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      >
                        <option value="">Selecione um horário</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações da Visita</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Duração</p>
                        <p className="text-gray-600">Aproximadamente 30 minutos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Acompanhantes</p>
                        <p className="text-gray-600">Até 4 pessoas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Localização</p>
                        <p className="text-gray-600">Endereço será enviado via WhatsApp</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-orange-50 rounded-xl">
                    <p className="text-sm text-orange-800">
                      <strong>Importante:</strong> Após clicar em "Agendar via WhatsApp", 
                      você será redirecionado para nosso WhatsApp com todas as informações 
                      preenchidas. Aguarde nossa confirmação!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleScheduleVisit}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Agendar via WhatsApp</span>
                </button>
              </div>

              {showSuccess && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center">
                  <div className="flex items-center justify-center space-x-2 text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Redirecionando para WhatsApp...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoImage} alt="Chácara Foto Clique" className="h-8 w-auto" />
                <span className="text-2xl font-bold">Chácara Foto Clique</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                O espaço perfeito para seus eventos especiais. Locação de chácara com 
                infraestrutura completa e atendimento personalizado.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-300">(45) 99811-0015</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-300">contato@chacarafotoclique.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-300">Cascavel - PR</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-gray-300">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 16h</p>
                <p>Domingo: Sob agendamento</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Chácara Foto Clique. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

