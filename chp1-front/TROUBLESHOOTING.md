
📌 1. PowerShell - npm.ps1 실행 불가 오류

오류 메시지: 
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.

해결 방법 (PowerShell에서 입력):
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

📌 2. 포트 충돌 오류 – Port 3000 is already in use

오류 메시지: Port 3000 is already in use.

해결 방법: 터미널에서 기존 서버를 중지: Ctrl + C 
또는 다른 포트로 실행 => powershell => $env:PORT=3001; npm run dev

📌 3. OpenSSL 오류 (Node 17 이상에서 발생)
오류 메시지: Error: error:0308010C:digital envelope routines::unsupported
code: 'ERR_OSSL_EVP_UNSUPPORTED'

해결 방법 (PowerShell에서 입력): $env:NODE_OPTIONS="--openssl-legacy-provider"; npm run dev
또는 package.json 스크립트 수정: "scripts": { "dev": "set NODE_OPTIONS=--openssl-legacy-provider && next dev"}
