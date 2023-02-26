import CryptoJS from 'crypto-js'

export const CryptoService = () => ({
	encrypt: (val: string, hashKey: string) => {
		return encodeURIComponent(CryptoJS.AES.encrypt(val, hashKey).toString())
	},
	decrypt: (val: string, hashKey: string) => {
		const decrypted = CryptoJS.AES.decrypt(decodeURIComponent(val), hashKey)
		const parser = decrypted.toString(CryptoJS.enc.Utf8)
		return parser
	},
})

