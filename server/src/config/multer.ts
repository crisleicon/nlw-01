import multer from 'multer'
import path from 'path' // path do diretório do node
import crypto from 'crypto' // bliblioteca que gera um hash aleatório

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex')

      const fileName = `${hash}-${file.originalname}`

      //callback(err, nome do arquivo)
      callback(null, fileName)

    }
  })
}