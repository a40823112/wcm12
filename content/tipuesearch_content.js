var tipuesearch = {"pages": [{'title': '每周上課內容', 'text': 'W7: (1.)設定 OBS、Youtube直播 (2.)小組討論設定、建立網站 W8: 線上課程、小組線上討論 W10: 利用 Python 程式讀取學生的座號與修課成績 W11: (1.) 說明如何將Python放入虛擬主機中 (2.)利用ssh來push倉儲 W12: 安裝虛擬主機 W13: 建立一台實體主機 W14: 編譯NGINX W15: (1.)利用Pypdf2切割pdf檔(2.)利用HxD編修pip.exe W16: 網際程式開發 W17: 說明分割與合併程式 \n \n \n', 'tags': '', 'url': '每周上課內容.html'}, {'title': '上課內容整理', 'text': '', 'tags': '', 'url': '上課內容整理.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'Python程式', 'text': 'import csv\n  \n# read student list\nfilename = \'D:/1a/1alist.txt\'\nwith open(filename, encoding="utf-8") as f:\n    content = f.readlines()\n    student = [x.strip() for x in content] \n#print(content)\n#print(student)\n  \n# Timestamp, email, ????, url, score, desp, memo\n# 0, 1, 2, 3, 4, 5, 6\n#total = 0\n \nall = {}\nwith open(\'D:/1a/1a.csv\', encoding="utf-8") as csv_file:\n    csv_reader = csv.reader(csv_file, delimiter=\',\')\n      \n    line_count = 0\n    for row in csv_reader:\n        if line_count == 0:\n            #print(f\'Column names are {", ".join(row)}\')\n            line_count += 1\n        else:\n            student_num = row[1].split("@")[0]\n            #print(student_num)\n            student_score = row[4]\n            #print(student_score)\n            try:\n                all.update({student_num: student_score})\n            except:\n                all.update({student_num: "error"})\n            #print(f\'\\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.\')\n            #print(f\'\\t{row[4]}\')\n            #total += int(row[4])\n            line_count += 1\n#print(all)\n#print(student)\n \nfor i in student:\n      \n    #if i in all:\n        #pass\n    #else:\n        #print(str(i))\n      \n    try:\n        print(i + "\\t" + all[i])\n    except:\n        print(i + "\\t60")\n \n  \n    #print(f\'Processed {line_count} lines.\')\n    #print("??=" + str(total/line_count)) \n Flask程式: \n from flask import Flask\n  \napp = Flask(__name__)\n  \n@app.route(\'/\') \ndef hello_world():\n    return \'Hello, From Flask!\'\n  \nif __name__== \'__main__\': \n    app.run() \n', 'tags': '', 'url': 'Python程式.html'}, {'title': 'CSV', 'text': '逗號分隔值 ( Comma-Separated Values ) 其檔案以 純文字 形式儲存表格 資料。 \n CSV檔案由任意數目的記錄 組成，記錄間以換行符號分隔；每條記錄由欄位 組成，欄位間的分隔符是其它字元或字串，最常見的就是逗號。 \n \n', 'tags': '', 'url': 'CSV.html'}, {'title': 'W12', 'text': '', 'tags': '', 'url': 'W12.html'}, {'title': '建立虛擬主機', 'text': '', 'tags': '', 'url': '建立虛擬主機.html'}, {'title': 'W14', 'text': '', 'tags': '', 'url': 'W14.html'}, {'title': 'MBR與GPT', 'text': '\n MBR:  Master Boot Record 主開機記錄  [啟動系統: BIOS ] 只適用於最大容量 2TB的硬碟 ，如果使用容量更大的硬碟，則無法識別，同時MBR也只支援最大4個主分割區。 現今的社會都是大容量的硬碟，所以使用MBR會被侷限。 GPT:  GUID Partition Table (俗稱:GUID磁碟分割表格) [啟動系統: UEIF ] GPT逐漸取代掉MBR，GPT使用了更現代的技術取代老舊的MBR磁碟分割表格。 GPT的推出與  UEFI  是相輔相成的， 想要 使用GPT 就必須是 UEFI的環境 。 \n 優勢: 1. 突破了 MBR 最大只支援 2T 硬碟的限制 \xa0 \xa0 \xa0 \xa0 \xa0  2. 允許無限數量的分割區不必創建擴展分區即可使其工作 \n 在 MBR 的磁碟上， 分割區和引導資料都存儲在 同一個地方 。如果資料被 覆蓋 或 損壞 ，就無法電將腦啟動。 相較之下， GPT 磁碟上會儲存 多個副本 ， 使其更加穩定、安全，並且可以在 資料損壞 下進行 修復 。', 'tags': '', 'url': 'MBR與GPT.html'}, {'title': 'BIOS與UEFI', 'text': 'BIOS : \xa0 Basic Input Output System\xa0\xa0基本輸入輸出系統 \n \n BIOS是位於電腦主機板上的晶片中的低級軟體。電腦啟動時， BIOS會喚醒電腦的硬體元件，確保它們正常運行。近幾年BIOS就沒有太大的技術改革，而且一直局限於 2TB 的磁碟，而且啟動時僅有的 1MB執行空間 ，導致啟動時間被拉長。 \n UEFI : \xa0 Unified Extensible Firmware Interface\xa0\xa0 統一可延伸韌體介面   [UEFI就像 進階版的BIOS ，但不能稱它為BIOS] \n \n UEFI是一種新的主機板引導項，它不同於傳統BIOS的開機流程，這種介面可以讓作業系統自動從預啟動的操作環境中載入，加快作業系統的速度。 UEFI帶來的 最大改變就是 圖形化 、 可滑鼠操作的介面 \n 優勢:\xa0 1. \xa0  有更強的安全性 \xa0 \xa0 \xa0 \xa0 \xa0 2. \xa0\xa0 啟動速度更快 \xa0 \xa0 \xa0 \xa0 \xa0 3. \xa0\xa0 支援容量更大', 'tags': '', 'url': 'BIOS與UEFI.html'}, {'title': 'W15', 'text': '', 'tags': '', 'url': 'W15.html'}, {'title': '利用Pypdf2來切割PDF檔', 'text': '# pypdf2_ex1.py\nimport os\nfrom PyPDF2 import PdfFileWriter, PdfFileReader\n \npdfReader = PdfFileReader(open("2002_Book_Real-WorldASPNETBuildingAConte.pdf", "rb"))\ninformation = [("WhatIsCMS",18,45)]\n \nfor page in range(len(information)):\n    pdf_writer = PdfFileWriter()\n    start = information[page][1]\n    end = information[page][2]\n    while start<=end:\n        pdf_writer.addPage(pdfReader.getPage(start-1))\n        start+=1\n    if not os.path.exists("./"):\n        os.makedirs(savepath)\n    output_filename = \'{}_{}_page_{}.pdf\'.format(information[page][0],information[page][1], information[page][2])\n    with open(output_filename,\'wb\') as out:\n        pdf_writer.write(out) \n', 'tags': '', 'url': '利用Pypdf2來切割PDF檔.html'}, {'title': 'W16', 'text': '', 'tags': '', 'url': 'W16.html'}, {'title': '何謂wsgi', 'text': 'WSGI ( Web Server Gateway Interface ) : \n WSGI 為一個Gateway，也就是閘道器。閘道器的作用就是在協議之間進行轉換。 \n WSGI\xa0 是一個web元件的介面防範，wsgi將web元件分為三類： web伺服器、web中介軟體、web應用程式。 作為 Web 伺服器與 Web 應用程式或應用框架之間的一種低階別的介面，以提升可移植 Web 應用開發的共同點。 \n WSGI有兩方： 伺服器 或 閘道器 一方，以及 應用程式 或 應用框架 一方。服務方呼叫應用方，提供環境資訊，以及一個回撥函式，並接收Web內容作為返回值。 \n', 'tags': '', 'url': '何謂wsgi.html'}, {'title': 'W17', 'text': '', 'tags': '', 'url': 'W17.html'}, {'title': 'PDF網際分割與合併程式', 'text': 'Google API \n \n 合併完上學期所做的所有東西 \n \n', 'tags': '', 'url': 'PDF網際分割與合併程式.html'}, {'title': '何謂 API', 'text': '應用程式介面 ( A pplication\xa0 P rogramming\xa0 I nterface ): \n \n 為用於打造應用程式軟體的一組副程式定義、協定與工具。 一般而言，API 是指各種軟體組件之間一套明確定義的溝通方法。簡單來說， 其就像是讓你用的一個函式庫，呼叫你想要使用的函式，並給予相對應的參數，函式便回傳給你結果。 \n WebAPI \n 在  Web Application  的開發情境下的 API 被稱為 Web API，在 Web API 作用時，客戶端和伺服器端會透過 HTTP 通訊協定來進行請求與回應。使用 Web API 的一方是客戶端，可能是瀏覽器、手機或者穿戴式設備等等，客戶端會向伺服器端發出請求，要求執行某個 CRUD 動作。', 'tags': '', 'url': '何謂 API.html'}, {'title': '何謂 URI', 'text': '統一資源識別碼 (U niform \xa0 R esource \xa0 I dentifier ) : \n \n 是可供您的應用程式在內部網路或網際網路上使用之資源的精簡標記法。 \xa0URI \xa0 類別會定義用來處理 URI 的屬性和方法，包括剖析、比較和合併。 \n URI \xa0 又可細分為 : \n URL:\xa0 統一資源定位符 (Uniform Resource Locator) \n URN:\xa0 統一資源名稱 (Uniform Resource Name)', 'tags': '', 'url': '何謂 URI.html'}, {'title': '何謂 URL 、 URN', 'text': 'URL 統一資源定位符 (Uniform Resource Locator) ;又名網域名稱 \n URL為URI的子集，其為網際網路 上標準的 資源的位址。 \n URN\xa0 統一資源名稱 (Uniform Resource Name) \n URN 並非如 URL 一般是用於指示資源的位址，而是用來鑑別實體的唯一性，也就是以名稱當作識別的依據。 \n \n', 'tags': '', 'url': '何謂 URL 、 URN.html'}, {'title': '錯誤修正', 'text': '', 'tags': '', 'url': '錯誤修正.html'}, {'title': '命令列無法使用pip下載程式', 'text': '我們當初是從 get-pip.py 下載pip，但下載後的 pip install 中的二位元檔的 Python 是 windows 版的(python w .exe)，所以當我們在命令列使用Python執行pip它才不會有反應。 \n 我們利用\xa0 Binary Editor  (二位元編輯器) 來更改pip.exe中的pythonw.exe改為python.exe。 \n \n', 'tags': '', 'url': '命令列無法使用pip下載程式.html'}, {'title': '操作步驟教學', 'text': '', 'tags': '', 'url': '操作步驟教學.html'}, {'title': '如何建網頁', 'text': '1.先在Github中新增一個倉儲 \n \n 2.新增一個tmp的目錄，再將剛創的倉儲clone進去 \n 利用編輯器在tmp的目錄下輸入 \n git clone https://github.com/a40823112/test12.git\n \n 3.利用編輯器在倉儲的目錄下輸入 \n git submodule add https://github.com/mdecourse/cmsimde.git cmsimde \n 4.將倉儲--cmsimde--up_dir內容全部複製到倉儲的目錄下 \n \n 5.利用編輯器在cmsimde目錄下輸入 \n python wsgi.py \n \n 完成網站建立 \n', 'tags': '', 'url': '如何建網頁.html'}, {'title': '如何使用SSH維護倉儲', 'text': '新增SSH的Key \n 1.利用編輯器進入shell的命令環境 \n \n 2.並輸入指令 \n ssh-keygen -t rsa -b 4096 -C "學號" \n \n /y/tmp/key/id_rsa \xa0在此目錄下 \xa0 id_rsa  與  id_rsa.pub  等 private key 與 public key \n 3.下載 putty 工具組，並利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式 \n \n \n 按下 Save private key 儲存 \n 4.將\xa0 public key 利用 scite 開啟 ，在工具列中Options-Wrap就可見完整的檔案內容 \n 5.將其內容複製後，開啟 github settings 中的 SSH and GPD keys \n \n 選擇 New SSH key \n \n 將其複製內容放入key的空格 \n \n 6. 修改啟動的 start.bat 加入下列設定: \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n \n 設定Putty: \n 1.將home 下的 .ssh 目錄中的 config 設定檔案為: \n \xa0 \n 2.將倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線:\xa0 \n [core]\n    repositoryformatversion = 0\n    filemode = false\n    bare = false\n    logallrefupdates = true\n    symlinks = false\n    ignorecase = true\n[submodule]\n    active = .\n[remote "origin"]\n    #url = https://github.com/mdecourse/wcmj2020.git\n    url = git@github.com:mdecourse/wcmj2020.git\n    fetch = +refs/heads/*:refs/remotes/origin/*\n[branch "master"]\n    remote = origin\n    merge = refs/heads/master\n[submodule "cmsimde"]\n    url = https://github.com/mdecourse/cmsimde.git \n 3.開啟 Putty.exe \n 4.Load github.com \n \n 5.進入 Connection-SSH-Auth 選擇之前所創好的Key \n \n 6.回到 Session 按save \n \n 7.按下open就可 無需輸入帳號密碼進行 git push \n', 'tags': '', 'url': '如何使用SSH維護倉儲.html'}, {'title': '如何安裝虛擬主機', 'text': '', 'tags': '', 'url': '如何安裝虛擬主機.html'}, {'title': '如何使用leo編輯Palican', 'text': '1.利用Scite開啟 launchLeo.py， 並且按Tools-Go \n 2.開啟FIle-Open-Outline，選擇倉儲config目錄中的pelican.leo \n \n 3.進入Pelican設定，更改 共用 中的 AUTHOR 與 SITENAME \n \n 4.更改 遠端 中的 SITEURL 與 DISQUS_SITENAME \n SITEURL  更改為倉儲Blog路徑 \n \n DISQUS_SITENAME\xa0 更改為自己的Disqus \n \n \n 5.進入 markdown 來更改Blog內容 \n \n 6.更改完內容後save，並在編輯器上輸入 \n pelican markdown -o blog -s local_publishconf.py\npelican markdown -o blog -s publishconf.py \n 7.輸入後push即可 \n', 'tags': '', 'url': '如何使用leo編輯Palican.html'}, {'title': '如何在虛擬主機上clone倉儲', 'text': '1.開啟 虛擬主機， 進入開機畫面,輸入密碼 \n \n 2.進入應用程式集，並開啟編輯器 \n \n 3.建立github資料夾 \n mkdir github\n \n 4.在github目錄下git clone 倉儲 \n \n 5.進入程式集中的FILE Manger PCManFM，查看是否建立成功 \n \n', 'tags': '', 'url': '如何在虛擬主機上clone倉儲.html'}]};