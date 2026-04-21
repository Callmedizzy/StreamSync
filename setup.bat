@echo off
echo Setup StreamSync...

echo [1/4] Installing dependencies...
call npm run install:all

echo [2/4] Configuring .env...
if not exist "backend\.env" (
    echo Creating backend\.env from example...
    copy "backend\.env.example" "backend\.env"
    echo MONGO_URI=mongodb://127.0.0.1:27017/streamsync >> "backend\.env"
    echo .env created with default local MongoDB settings.
) else (
    echo .env already exists, skipping.
)

echo [3/4] Seeding initial data...
call npm run seed

echo [4/4] Starting development server...
call npm run dev

pause
