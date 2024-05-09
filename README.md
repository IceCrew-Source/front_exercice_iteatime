Installation:

    1. git clone https://github.com/IceCrew-Source/front_exercice_iteatime.git
    2. cd front_exercice_iteatime
    3. Install nodes modules : npm i
    4. Launch the database : docker compose -f docker-compose.yml up
    5. Copy files from .env.example to a new .env file
    6. run a migration and populate the database : node ace migration:fresh --seed
    7. Run the server : npm run dev
    8. Enjoy


