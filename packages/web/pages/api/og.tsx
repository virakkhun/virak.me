import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
	runtime: 'edge',
}

export default function handler(request: NextRequest) {
	try {
		const authorImageUrl =
			'https://virak.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvirak_khun.c61dfe44.jpg&w=1920&q=75&dpl=dpl_C45r9iL4kBJrLtj6x9YPRAuCNAxa'

		return new ImageResponse(
			(
				<div
					style={{
						width: '100%',
						height: '100vh',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#1d1d1d',
						padding: '0 1rem',
					}}
				>
					<div
						style={{
							display: 'flex',
							background: 'rgba(0,0,0, 0.3)',
							width: '30%',
							padding: '2rem',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '0.5rem',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '12px',
							}}
						>
							<div
								style={{
									display: 'flex',
									width: '320px',
									height: '320px',
									overflow: 'hidden',
									borderRadius: '50%',
								}}
							>
								<img
									src={authorImageUrl}
									alt='Virak Khun'
									width={320}
									height={320}
								/>
							</div>

							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									flexDirection: 'column',
									gap: '12px',
								}}
							>
								<p
									style={{
										fontSize: '32px',
										lineHeight: '1.4',
										color: '#E2E2E2',
										fontWeight: 'bold',
									}}
								>
									Virak Khun
								</p>

								<p
									style={{
										fontSize: '24px',
										lineHeight: '1.4',
										color: '#cbcbcb',
									}}
								>
									Software Engineer
								</p>
							</div>
						</div>
					</div>
				</div>
			),
			{
				width: 1920,
			},
		)
	} catch (e: any) {
		return new Response(`Failed to generate the image`, {
			status: 500,
		})
	}
}

