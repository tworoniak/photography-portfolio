// type FilterInputProps = {
//   filter: string;
//   placeholder: string;
//   onChange: (filter: string) => void;
// };

// const FilterInput = ({ filter, placeholder, onChange }: FilterInputProps) => {
//   return (
//     <div className='filter'>
//       <input
//         type='text'
//         name='filter'
//         placeholder={placeholder}
//         value={filter}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </div>
//   );
// };

// export default FilterInput;

type FilterInputProps = {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
};

export default function FilterInput({
  value,
  onChange,
  placeholder = 'Filter by band name…',
}: FilterInputProps) {
  return (
    <div className='w-full max-w-md'>
      <label className='sr-only' htmlFor='gallery-filter'>
        Filter galleries
      </label>

      <input
        id='gallery-filter'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className='
          w-full rounded-lg border border-white/10 bg-white/5
          px-4 py-3 text-white placeholder:text-white/40
          outline-none
          focus:border-white/30 focus:ring-2 focus:ring-white/10
          transition
        '
        type='text'
      />
    </div>
  );
}
