import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string;
	dark?: boolean;
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
	return (
		<div
			className={cn('relative pointer-events-none z-50 overflow-hidden', className)}
			{...props}>
			<Image
				src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'}
				alt="Phone image"
				width={500}
				height={500}
				className="pointer-events-none z-50 select-none"
			/>

			<div className="absolute -z-10 inset-0">
				<Image
					className="object-cover min-w-full min-h-full"
					src={imgSrc}
					alt="overlaying phone image"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};

export default Phone;
