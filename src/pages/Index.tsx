import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Home" size={28} className="text-primary" />
              <span className="text-xl font-bold text-primary">ModularHomes</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Получить консультацию</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-white/80">Инновационные решения</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Модульные дома
                  <span className="text-secondary block">будущего</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Создаем энергоэффективные, экологичные и стильные модульные дома 
                  с применением передовых технологий и 3D-визуализации
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Icon name="Play" size={20} className="mr-2" />
                  3D-Визуализация
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать каталог
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
                <img 
                  src="/img/679e6954-df2f-485a-bc56-5ab4b75fd11a.jpg"
                  alt="Модульный дом" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Icon name="Zap" size={24} className="text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог модульных домов</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите идеальный дом из нашей коллекции или создайте индивидуальный проект
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">Все дома</TabsTrigger>
              <TabsTrigger value="studio">Студии</TabsTrigger>
              <TabsTrigger value="family">Семейные</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Modern Studio",
                    price: "от 2 890 000 ₽",
                    area: "45 м²",
                    rooms: "1 комната",
                    image: "/img/254cfb0f-359a-46ee-81e5-fce35c15ef2c.jpg",
                    features: ["Панорамные окна", "Умный дом", "Терраса"]
                  },
                  {
                    title: "Family House",
                    price: "от 4 590 000 ₽",
                    area: "85 м²",
                    rooms: "3 комнаты",
                    image: "/img/23c1db87-9832-40ed-ba82-374653e36c8d.jpg",
                    features: ["Два этажа", "Гараж", "Сад"]
                  },
                  {
                    title: "Premium Villa",
                    price: "от 6 290 000 ₽",
                    area: "120 м²",
                    rooms: "4 комнаты",
                    image: "/img/679e6954-df2f-485a-bc56-5ab4b75fd11a.jpg",
                    features: ["Бассейн", "Сауна", "Подвал"]
                  }
                ].map((house, idx) => (
                  <Card key={idx} className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up">
                    <div className="relative overflow-hidden">
                      <img 
                        src={house.image} 
                        alt={house.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <Icon name="Heart" size={16} className="text-muted-foreground" />
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{house.title}</CardTitle>
                        <Badge variant="secondary">{house.price}</Badge>
                      </div>
                      <CardDescription className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Icon name="Square" size={16} />
                          {house.area}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Bed" size={16} />
                          {house.rooms}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {house.features.map((feature, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1">
                            <Icon name="Eye" size={16} className="mr-2" />
                            3D-Тур
                          </Button>
                          <Button variant="outline">
                            <Icon name="Download" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="studio" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/img/254cfb0f-359a-46ee-81e5-fce35c15ef2c.jpg"
                      alt="Modern Studio"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Modern Studio</CardTitle>
                    <CardDescription>Компактное решение для современной жизни</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="family" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/img/23c1db87-9832-40ed-ba82-374653e36c8d.jpg"
                      alt="Family House"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Family House</CardTitle>
                    <CardDescription>Просторный дом для всей семьи</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества модульного строительства</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Почему выбирают модульные дома для современной жизни
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Clock",
                title: "Быстрое строительство",
                description: "Сборка дома занимает 2-4 недели благодаря заводскому производству модулей"
              },
              {
                icon: "Leaf",
                title: "Экологичность",
                description: "Используем натуральные материалы и энергоэффективные технологии"
              },
              {
                icon: "Shield",
                title: "Высокое качество",
                description: "Контроль качества на всех этапах производства в заводских условиях"
              },
              {
                icon: "DollarSign",
                title: "Экономия средств",
                description: "Стоимость на 20-30% ниже традиционного строительства"
              },
              {
                icon: "Zap",
                title: "Энергоэффективность",
                description: "Класс энергоэффективности А+, минимальные расходы на отопление"
              },
              {
                icon: "Settings",
                title: "Индивидуальность",
                description: "Возможность кастомизации планировки и дизайна под ваши потребности"
              }
            ].map((advantage, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-slide-up">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon name={advantage.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Портфолио готовых проектов</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Реализованные проекты наших клиентов по всей стране
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Загородный дом в Подмосковье",
                location: "Московская область",
                year: "2024",
                image: "/img/679e6954-df2f-485a-bc56-5ab4b75fd11a.jpg"
              },
              {
                title: "Модульная дача в Сочи",
                location: "Краснодарский край",
                year: "2023",
                image: "/img/23c1db87-9832-40ed-ba82-374653e36c8d.jpg"
              },
              {
                title: "Студия в Санкт-Петербурге",
                location: "Ленинградская область",
                year: "2024",
                image: "/img/254cfb0f-359a-46ee-81e5-fce35c15ef2c.jpg"
              }
            ].map((project, idx) => (
              <Card key={idx} className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="secondary" className="mb-2">{project.year}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Icon name="MapPin" size={16} />
                    {project.location}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать строительство?</h2>
                <p className="text-primary-foreground/80 text-lg">
                  Получите бесплатную консультацию и расчет стоимости вашего модульного дома
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} />
                  <span>info@modularhomes.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} />
                  <span>Москва, ул. Строительная, 15</span>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-foreground">Заявка на консультацию</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="text-lg font-bold">ModularHomes</span>
              </div>
              <p className="text-background/80 text-sm">
                Создаем модульные дома будущего с применением передовых технологий
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Проектирование</li>
                <li>Производство</li>
                <li>Монтаж</li>
                <li>Сервис</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={20} className="text-background/80 hover:text-background cursor-pointer" />
                <Icon name="Youtube" size={20} className="text-background/80 hover:text-background cursor-pointer" />
                <Icon name="Twitter" size={20} className="text-background/80 hover:text-background cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/80">
            © 2024 ModularHomes. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;