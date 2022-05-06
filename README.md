# BookstoreManager

### install: 
    npm i

### run:
    npm run dev

## <font color='red'>* NOTE  !important</font>
**Something change from Dhieu**

    - DB có sửa thuộc tính created_at ở tất cả các bảng thành create_at 
        - Chả hiểu sao sequelize-auto nó không generate được thuộc tính created_at nên đổi thành create_at
        - Đã update db ở file database/BookstoreDB.sql và database/insertDB.sql (mấy file còn lại t không dùng nên không biết)
    
    - Hiện tại đã bỏ xác thực người dùng mới vào đc web để mn tiện làm các phần khác, muốn ktra thì:
        - Bỏ cmt ở /*authController.checkAuthenticated*/ trong file initRouter
        - Thêm dữ liệu vào DB: insert into account (id, email, password, first_name, last_name, gender, phone_number, address, avatar, uid, role, status) values (default, 'd.hieu.13.04@gmail.com', '$2b$10$K6uzgtaGcTmsOy/GQGklHuVr3JxXAdbGB5XrQEFO3IghF0rG4HYiC', 'Nguyễn Đình', 'Hiệu', 'Male', '0378945612', '227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh', 'https://i.pinimg.com/550x/7f/e0/81/7fe081ce0b5b88171bb279866f2ac99a.jpg', '2d7beea6-ccac-11ec-9d64-0242ac120002', 'superadmin', 'active');
        - Đăng nhập bằng: 
            - email: d.hieu.13.04@gmail.com
            - password: 123456

