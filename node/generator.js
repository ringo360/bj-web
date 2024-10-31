const fs = require("fs").promises;
const path = require("path");

async function getFileLists(directory) {
    try {
        // ディレクトリ内のファイルとサブディレクトリを取得
        const filesAndDirs = await fs.readdir(directory, {
            withFileTypes: true,
        });

        // ファイル名とバイト数のリストを初期化
        const filenames = [];
        const byteSizes = [];

        // 各ファイルとサブディレクトリに対して処理を行う
        for (const entry of filesAndDirs) {
            if (entry.isDirectory()) {
                // サブディレクトリの場合、再帰的に処理を行う
                const subDirPath = path.join(directory, entry.name);
                await getFileLists(subDirPath);
            } else {
                // ファイルの場合、バイト数を計算しリストに追加
                const filePath = path.join(directory, entry.name);
                const stats = await fs.stat(filePath);
                filenames.push(entry.name);
                byteSizes.push(stats.size);
            }
        }

        return { filenames, byteSizes };
    } catch (error) {
        console.error("エラーが発生しました:", error);
        throw error;
    }
}

async function main() {
    console.log(await getFileLists("./assets/cards/"));
}

main();
