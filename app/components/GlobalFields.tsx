'use client';

import { useController, useFormContext } from 'react-hook-form';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { FormData } from '@/app/lib/formSchema';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const AREAS = ['Orgánico', 'Ideas de Video', 'Trend', 'Paid Media', 'Email Marketing', 'Otro/General'];

export function GlobalFields() {
  const { control, watch, formState: { errors } } = useFormContext<FormData>();
  const area = watch('area');
  
  const { field: nombreField } = useController({
    control,
    name: 'nombre',
  });
  
  const { field: areaField } = useController({
    control,
    name: 'area',
  });
  
  const { field: productoField } = useController({
    control,
    name: 'producto',
  });
  
  const { field: descripcionField } = useController({
    control,
    name: 'descripcion',
  });
  
  const { field: fechaField } = useController({
    control,
    name: 'fechaLimite',
  });

  return (
    <div className="space-y-6">
      {/* Nombre */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Nombre del Solicitante
        </label>
        <input
          {...nombreField}
          type="text"
          placeholder="Tu nombre completo"
          className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400"
        />
        {errors.nombre && (
          <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>
        )}
      </div>

      {/* Área */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Área / Departamento
        </label>
        <select
          {...areaField}
          className="w-full px-4 py-3 rounded-lg glass-select text-white"
        >
          <option value="">Selecciona una área</option>
          {AREAS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        {errors.area && (
          <p className="text-red-400 text-sm mt-1">{errors.area.message}</p>
        )}
      </div>

      {/* Producto */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Producto o Servicio
        </label>
        <input
          {...productoField}
          type="text"
          placeholder="Nombre del producto o servicio"
          className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400"
        />
        {errors.producto && (
          <p className="text-red-400 text-sm mt-1">{errors.producto.message}</p>
        )}
      </div>

      {/* Descripción */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Descripción del Pedido
        </label>
        <textarea
          {...descripcionField}
          placeholder="Describe detalladamente tu solicitud"
          rows={4}
          className="w-full px-4 py-3 rounded-lg glass-input text-white placeholder:text-gray-400 resize-none"
        />
        {errors.descripcion && (
          <p className="text-red-400 text-sm mt-1">{errors.descripcion.message}</p>
        )}
      </div>

      {/* Fecha Límite */}
      <div>
        <label className="block text-sm font-medium mb-2 text-purple-200">
          Fecha Límite
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal glass-button px-4 py-3 h-auto rounded-lg hover:bg-purple-600"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {fechaField.value
                ? format(fechaField.value, 'PPP', { locale: es })
                : 'Selecciona una fecha'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 glass-card border-purple-500/50" align="start">
            <CalendarComponent
              mode="single"
              selected={fechaField.value}
              onSelect={fechaField.onChange}
              disabled={(date) => date < new Date()}
              locale={es}
              className="text-purple-200"
            />
          </PopoverContent>
        </Popover>
        {errors.fechaLimite && (
          <p className="text-red-400 text-sm mt-1">{errors.fechaLimite.message}</p>
        )}
      </div>
    </div>
  );
}
