# Documentación

## Configuración
Para poder realizar las pruebas respectivas, no pude ejecutarlo usando el curl -d sin embargo las api si funcionan si se prueban directamente en aws en la página 
https://console.aws.amazon.com/apigateway/home?region=us-east-1#/apis/5qf4m6te4j/resources/1jsxhn/methods/POST 
O si se realiza la petición desde el postman como se ve en la siguiente imagen:

![Configuracion AWS](https://i.ibb.co/K23hHRD/config-postman.png)

## Access Key AWS
- Access key: AKIATA6J7ZQRPT4S3PPQ
- Secret key: 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
- aws-region: us-east-1
- service name: entrevista



En el proyecto se crearon 2 nuevos archivos que son los encargados de administrar la interacción con la api y el backend encargado de devolver el resultado
de calcular el numero triangular en la carpeta python podemos ver el archivo calcular_triangular.py que tiene la lógica para calcular el triangular según un numero que recibe como parametro.

En la carpeta javascript está la función principal para manejar el evento en la api


## Test

Se realizaron pruebas de ambos servicios haciendo uso de postman, para el metodo de calcular triangular se expuso la siguiente url.

- url triangular
https://5qf4m6te4j.execute-api.us-east-1.amazonaws.com/dev/triangular

- url fibonacci
https://5qf4m6te4j.execute-api.us-east-1.amazonaws.com/dev/fibo


En la siguiente imagen se ve las pruebas a la api de triangular:
- prueba 1

![Prueba 1](https://i.ibb.co/M9SzMcx/triangular1.png)

- prueba 2

![prueba 2](https://i.ibb.co/YLyZnRs/triangular2.png)