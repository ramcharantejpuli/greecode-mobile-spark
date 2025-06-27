
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#6c63ff',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#4cc9f0',
					foreground: '#000000'
				},
				destructive: {
					DEFAULT: '#ff375f',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#1e1e1e',
					foreground: '#a3a3a3'
				},
				accent: {
					DEFAULT: '#2a2a2a',
					foreground: '#ffffff'
				},
				popover: {
					DEFAULT: '#1e1e1e',
					foreground: '#ffffff'
				},
				card: {
					DEFAULT: '#1e1e1e',
					foreground: '#ffffff'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
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
				'mic-base-crawl': {
					'0%': {
						transform: 'translateX(-100px) scaleX(0)',
						opacity: '0'
					},
					'50%': {
						transform: 'translateX(-20px) scaleX(0.5)',
						opacity: '0.5'
					},
					'100%': {
						transform: 'translateX(0) scaleX(1)',
						opacity: '1'
					}
				},
				'mic-stand-grow': {
					'0%': {
						transform: 'scaleY(0)',
						opacity: '0'
					},
					'100%': {
						transform: 'scaleY(1)',
						opacity: '1'
					}
				},
				'mic-head-assemble': {
					'0%': {
						transform: 'translateY(-50px) scale(0) rotate(180deg)',
						opacity: '0'
					},
					'70%': {
						transform: 'translateY(5px) scale(1.1) rotate(10deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'translateY(0) scale(1) rotate(0deg)',
						opacity: '1'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'mic-base-crawl': 'mic-base-crawl 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'mic-stand-grow': 'mic-stand-grow 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'mic-head-assemble': 'mic-head-assemble 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'logo-slide-in': 'logo-slide-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'tagline-fade-in': 'tagline-fade-in 0.8s ease-out forwards',
				'slide-in-up': 'slide-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'typing': 'typing 1.5s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
