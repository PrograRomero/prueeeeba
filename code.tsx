import React, { useState } from 'react';
import { Button } from "/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";

const MundoMate = () => {
  const [activeTab, setActiveTab] = useState('algebra');

  const categories = [
    { id: 'algebra', name: 'Álgebra' },
    { id: 'aritmetica', name: 'Aritmética' },
    { id: 'geometria', name: 'Geometría' },
    { id: 'estadistica', name: 'Estadística' },
    { id: 'calculo', name: 'Cálculo' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">El Mundo-Mate</h1>
        <p className="text-muted-foreground text-lg">Explora el fascinante mundo de las matemáticas</p>
      </header>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeTab === category.id ? "default" : "outline"}
            onClick={() => setActiveTab(category.id)}
            className="rounded-full px-6"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto">
        {/* Algebra Content */}
        {activeTab === 'algebra' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Álgebra - Introducción</CardTitle>
                <CardDescription>
                  Conceptos fundamentales del álgebra y ejercicios resueltos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Ecuaciones Lineales</h3>
                    <p className="text-sm text-muted-foreground">
                      Resolución de ecuaciones de primer grado con ejemplos prácticos
                    </p>
                    <img 
                      src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Algebraic equations with variables and solutions on chalkboard&id=algebra-001" 
                      alt="Pizarra con ecuaciones algebraicas lineales y soluciones paso a paso" 
                      className="mt-2 rounded w-full"
                    />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Polinomios</h3>
                    <p className="text-sm text-muted-foreground">
                      Operaciones con polinomios y factorización
                    </p>
                    <img 
                      src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Polynomial expressions and factorization diagrams&id=algebra-002" 
                      alt="Diagramas de expresiones polinómicas y procesos de factorización" 
                      className="mt-2 rounded w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subir Documentación de Álgebra</CardTitle>
                <CardDescription>
                  Comparte tus apuntes y ejercicios resueltos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="algebra-file">Seleccionar archivo</Label>
                    <Input id="algebra-file" type="file" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="algebra-desc">Descripción</Label>
                    <Input id="algebra-desc" placeholder="Describe el contenido del documento" />
                  </div>
                  <Button>Subir Documento</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Aritmetica Content */}
        {activeTab === 'aritmetica' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Aritmética - Fundamentos</CardTitle>
                <CardDescription>
                  Operaciones básicas y problemas aritméticos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Operaciones Básicas</h3>
                    <p className="text-sm text-muted-foreground">
                      Suma, resta, multiplicación y división con ejemplos
                    </p>
                    <img 
                      src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Basic arithmetic operations with numbers and symbols&id=aritmetica-001" 
                      alt="Ilustración de operaciones aritméticas básicas con números y símbolos" 
                      className="mt-2 rounded w-full"
                    />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Fracciones y Decimales</h3>
                    <p className="text-sm text-muted-foreground">
                      Conversión y operaciones con fracciones
                    </p>
                    <img 
                      src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Fractions and decimals conversion charts&id=aritmetica-002" 
                      alt="Tablas de conversión entre fracciones y decimales con ejemplos" 
                      className="mt-2 rounded w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subir Documentación de Aritmética</CardTitle>
                <CardDescription>
                  Comparte tus ejercicios y problemas resueltos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="aritmetica-file">Seleccionar archivo</Label>
                    <Input id="aritmetica-file" type="file" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aritmetica-desc">Descripción</Label>
                    <Input id="aritmetica-desc" placeholder="Describe el contenido del documento" />
                  </div>
                  <Button>Subir Documento</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Repeat similar structure for Geometria, Estadistica, and Calculo */}
        {/* Geometria Content */}
        {activeTab === 'geometria' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Geometría - Formas y Espacio</CardTitle>
                <CardDescription>
                  Estudio de figuras geométricas y sus propiedades
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Figuras Planas</h3>
                    <p className="text-sm text-muted-foreground">
                      Triángulos, cuadrados, círculos y sus propiedades
                    </p>
                    <img 
                      src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Geometric shapes with measurements and formulas&id=geometria-001" 
                      alt="Dibujos de figuras geométricas planas con medidas y fórmulas" 
                      className="mt-2 rounded w-full"
                    />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Cuerpos Geométricos</h3>
                    <p className="text-sm text-muted-foreground">
                      Cubos, esferas, pirámides y sus características
                    </p>
                    <img 
                      src="https://placeholder-image-service.onrender.com/image/300x200?prompt=3D geometric solids with dimensions and volume formulas&id=geometria-002" 
                      alt="Representación de cuerpos geométricos tridimensionales con dimensiones" 
                      className="mt-2 rounded w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subir Documentación de Geometría</CardTitle>
                <CardDescription>
                  Comparte tus diagramas y problemas geométricos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="geometria-file">Seleccionar archivo</Label>
                    <Input id="geometria-file" type="file" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="geometria-desc">Descripción</Label>
                    <Input id="geometria-desc" placeholder="Describe el contenido del documento" />
                  </div>
                  <Button>Subir Documento</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Estadistica Content */}
        {activeTab === 'estadistica' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estadística - Análisis de Datos</CardTitle>
                <CardDescription>
                  Recopilación, análisis e interpretación de datos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Estadística Descriptiva</h3>
                    <p className="text-sm text-muted-foreground">
                      Medidas de tendencia central y dispersión
                    </p>
                    <img 
                      src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Statistical charts showing mean median mode and standard deviation&id=estadistica-001" 
                      alt="Gráficos estadísticos mostrando medidas de tendencia central y dispersión" 
                      className="mt-2 rounded w-full"
                    />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Gráficos y Diagramas</h3>
                    <p className="text-sm text-muted-foreground">
                      Representación visual de datos estadísticos
                    </p>
                    <img 
                      src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Various statistical graphs and charts bar pie line graphs&id=estadistica-002" 
                      alt="Diversos gráficos estadísticos como barras, pastel y líneas" 
                      className="mt-2 rounded w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subir Documentación de Estadística</CardTitle>
                <CardDescription>
                  Comparte tus análisis y estudios estadísticos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="estadistica-file">Seleccionar archivo</Label>
                    <Input id="estadistica-file" type="file" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="estadistica-desc">Descripción</Label>
                    <Input id="estadistica-desc" placeholder="Describe el contenido del documento" />
                  </div>
                  <Button>Subir Documento</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Calculo Content */}
        {activeTab === 'calculo' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cálculo - Matemáticas Avanzadas</CardTitle>
                <CardDescription>
                  Límites, derivadas, integrales y aplicaciones
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Cálculo Diferencial</h3>
                    <p className="text-sm text-muted-foreground">
                      Derivadas y aplicaciones en problemas reales
                    </p>
                    <img 
                      src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Calculus derivatives and tangent lines on graphs&id=calculo-001" 
                      alt="Gráficos mostrando derivadas y líneas tangentes en cálculo diferencial" 
                      className="mt-2 rounded w-full"
                    />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Cálculo Integral</h3>
                    <p className="text-sm text-muted-foreground">
                      Integrales y teorema fundamental del cálculo
                    </p>
                    <img 
                      src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Integral calculus with area under curve diagrams&id=calculo-002" 
                      alt="Diagramas de cálculo integral mostrando área bajo la curva" 
                      className="mt-2 rounded w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subir Documentación de Cálculo</CardTitle>
                <CardDescription>
                  Comparte tus problemas y soluciones de cálculo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="calculo-file">Seleccionar archivo</Label>
                    <Input id="calculo-file" type="file" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="calculo-desc">Descripción</Label>
                    <Input id="calculo-desc" placeholder="Describe el contenido del documento" />
                  </div>
                  <Button>Subir Documento</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 py-6 border-t border-border">
        <p className="text-muted-foreground">
          © 2024 El Mundo-Mate - Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default MundoMate;
