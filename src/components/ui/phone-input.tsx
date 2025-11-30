import React from 'react';
import PhoneInputBase from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface PhoneInputProps {
    value: string | undefined;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    inputSize?: 'sm' | 'md' | 'lg';
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
    value,
    onChange,
    placeholder = 'Phone number',
    error,
    disabled = false,
}) => {
    return (
        <div className="space-y-2">
            <div className="relative">
                <PhoneInputBase
                    international
                    defaultCountry="AT"
                    value={value}
                    onChange={(phoneNumber) => onChange(phoneNumber || '')}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`
            flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
            ${error ? 'border-destructive' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            [&>input]:bg-transparent [&>input]:outline-none [&>input]:ml-2
          `}
                />
            </div>
            {error && (
                <div className="text-destructive text-xs">
                    {error}
                </div>
            )}
        </div>
    );
};

