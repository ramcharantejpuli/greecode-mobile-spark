import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'rgb(0, 0, 0)',
				input: 'rgb(245, 245, 245)',
				ring: 'rgb(255, 193, 7)',
				background: 'rgb(255, 255, 255)',
				foreground: 'rgb(0, 0, 0)',
				primary: {
					DEFAULT: '#ffc107',
					foreground: '#000000'
				},
				secondary: {
					DEFAULT: '#f5f5f5',
					foreground: '#000000'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#f5f5f5',
					foreground: '#737373'
				},
				accent: {
					DEFAULT: '#ffc107',
					foreground: '#000000'
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#000000'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#000000'
				},
				sidebar: {
					DEFAULT: 'rgb(255, 255, 255)',
					foreground: 'rgb(0, 0, 0)',
					primary: 'rgb(255, 193, 7)',
					'primary-foreground': 'rgb(0, 0, 0)',
					accent: 'rgb(245, 245, 245)',
					'accent-foreground': 'rgb(0, 0, 0)',
					border: 'rgb(0, 0, 0)',
					ring: 'rgb(255, 193, 7)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'thinder-bolt-appear': {
					'0%': {
						transform: 'scale(0) rotate(-45deg)',
						opacity: '0',
						filter: 'brightness(2)'
					},
					'30%': {
						transform: 'scale(0.6) rotate(-15deg)',
						opacity: '0.8',
						filter: 'brightness(1.8)'
					},
					'60%': {
						transform: 'scale(1.2) rotate(5deg)',
						opacity: '1',
						filter: 'brightness(1.2)'
					},
					'80%': {
						transform: 'scale(0.95) rotate(-2deg)',
						opacity: '1',
						filter: 'brightness(1.1)'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1',
						filter: 'brightness(1)'
					}
				},
				'logo-slide-in': {
					'0%': {
						transform: 'translateX(100px)',
						opacity: '0'
					},
					'80%': {
						transform: 'translateX(-10px)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'tagline-fade-in': {
					'0%': {
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-in-up': {
					'0%': {
						transform: 'translateY(100px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'fade-in-up': {
					'0%': {
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '0.8'
					},
					'70%': {
						transform: 'scale(0.9)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'typing': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0'
					}
				},
				'checkmark-draw': {
					'0%': {
						strokeDashoffset: '100',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						strokeDashoffset: '0',
						opacity: '1'
					}
				},
				'success-bounce': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.1)',
						opacity: '0.8'
					},
					'70%': {
						transform: 'scale(0.9)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'thinder-bolt-appear': 'thinder-bolt-appear 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'logo-slide-in': 'logo-slide-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'tagline-fade-in': 'tagline-fade-in 0.8s ease-out forwards',
				'slide-in-up': 'slide-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'typing': 'typing 1.5s infinite',
				'checkmark-draw': 'checkmark-draw 0.8s ease-in-out forwards',
				'success-bounce': 'success-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
