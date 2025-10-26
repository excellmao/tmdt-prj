/* --- ĐỊNH DẠNG SỐ TIỀN (Helper Function) --- */
function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

/* --- CẬP NHẬT SỐ LƯỢNG TRÊN ICON GIỎ HÀNG --- */
function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = 0;
    cart.forEach(item => {
        totalItems += item.quantity;
    });

    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

/* --- (TRANG CHI TIẾT SẢN PHẨM) HÀM THÊM VÀO GIỎ --- */
// Hàm này được gọi từ trang chi-tiet-san-pham.html
function addToCart(productId, productName, productPrice, productImg, quantity) {

    // 1. Lấy giỏ hàng hiện tại từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 2. Kiểm tra xem sản phẩm đã tồn tại trong giỏ chưa
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex > -1) {
        // Nếu đã tồn tại, cập nhật số lượng
        cart[existingProductIndex].quantity += quantity;
    } else {
        // Nếu chưa, thêm mới
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            img: productImg,
            quantity: quantity
        });
    }

    // 3. Lưu lại giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // 4. Cập nhật icon và thông báo
    updateCartIcon();
    alert('Đã thêm sản phẩm vào giỏ hàng!');
}

/* --- (TRANG GIỎ HÀNG) TẢI DỮ LIỆU GIỎ HÀNG --- */
function loadCartPage() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartSubtotalElement = document.getElementById('cart-subtotal');
    let totalAmount = 0;

    if (!cartItemsContainer) return; // Thoát nếu không phải trang giỏ hàng

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<tr><td colspan="6" style="text-align: center;">Giỏ hàng của bạn đang trống</td></tr>';
        cartTotalElement.textContent = '0 VNĐ';
        cartSubtotalElement.textContent = '0 VNĐ';
        return;
    }

    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="cart-item-info" colspan="2">
                <img src="${item.img}" alt="${item.name}" style="width: 90px; height: 110px; object-fit: cover; margin-right: 10px;">
                <span>${item.name}</span>
            </td>
            <td>${formatCurrency(item.price)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" class="cart-quantity-input" onchange="updateCartQuantity(${index}, this.value)">
            </td>
            <td>${formatCurrency(itemTotal)}</td>
            <td>
                <button class="btn-remove" onclick="removeFromCart(${index})">X</button>
            </td>
        `;
        cartItemsContainer.appendChild(row);
    });

    // Cập nhật tổng tiền
    cartTotalElement.textContent = formatCurrency(totalAmount);
    cartSubtotalElement.textContent = formatCurrency(totalAmount);
}

/* --- (TRANG GIỎ HÀNG) CẬP NHẬT SỐ LƯỢNG --- */
function updateCartQuantity(index, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const quantity = parseInt(newQuantity);

    if (quantity > 0) {
        cart[index].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartPage();
        updateCartIcon();
    }
}

/* --- (TRANG GIỎ HÀNG) XÓA SẢN PHẨM --- */
function removeFromCart(index) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartPage();
        updateCartIcon();
    }
}

/* --- (TRANG GIỎ HÀNG) THANH TOÁN (Mô phỏng) --- */
function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
        return;
    }

    localStorage.removeItem('cart');
    alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm.');
    loadCartPage();
    updateCartIcon();
}

/* --- CHẠY HÀM NÀY KHI TẢI TẤT CẢ CÁC TRANG --- */
document.addEventListener('DOMContentLoaded', updateCartIcon);