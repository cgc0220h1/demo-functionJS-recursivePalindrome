function startFunc() {
    let value = prompt("Nhập vào chuỗi muốn kiểm tra: ");
    if (isPalindrome(value)) {
        return alert("Chuỗi đối xứng");
    }
    return alert("Chuỗi không đối xứng");
}

function isPalindrome(string) {
    if (string.length <= 1) {
        return true;
    }
    if (string[0] == string[string.length - 1]) {
        string = string.slice(0, -1);
        string = string.substr(1);
        return isPalindrome(string); //Chỗ này thêm return mới có giá trị trả về
    }
    return false;
}
