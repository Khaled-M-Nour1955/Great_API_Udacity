Scripts

- Install: ``npm install``
- Build: ``npm run build``
- Lint: ``npm run lint``
- Prettify: ``npm run prettify``
- test: ``npm run test``
- Start with nodemon: ``npm run start``

### Usage

The server will listen on port 3000:

#### the givien url

http://localhost:3000/

#### Endpoint to resize images

http://localhost:3000/resizeimage

 query arguments are:

- _filename_: Available filenames are:
  - encenadaport
  - fjord
  - icelandwaterfall
  - palmtunnel
  - santamonica
- _width_: value toBe number.
- _height_: value toBe number.

#### root Endpoint

http://localhost:3000/resizeimage

#### with name ,height and width

http://localhost:3000/resizeimage?filename=fjord&width=200&height=200

#### without height

http://localhost:3000/resizeimage?filename=fjord&width=200

#### without width

http://localhost:3000/resizeimage?filename=fjord&height=200

### Notes

- Images are served from `./images` .
- Image thumbs will be stored in `./thumbs` .
