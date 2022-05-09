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



## Password
###
- Jesse17
    + $2b$05$4nNWSCI1czVtTslcpKnjx.nXyEUaiIs489DzeEfnjo9wIJGY2DEY6

###
- Rubie99
    + $2b$05$nM2aNe/70Vx.v7Y05QGIGOai2Tmb5Oymqhv2RKcFITtRjK6j.UhXG

###
- Janek22
    + $2b$05$B5koRl8oFvRL6zpNR1Q6PelSA6.R0wq6PChPtjCPvId0P.CV5ruRu

###
- Mille99
    + $2b$05$M0GMr5L/cLeHpskZgyzxFeuOdDGhptcKjNGJUlHISTiJk6o7S8.Xa

###
- Bobbe98
    + $2b$05$FUY.U32RxAKj3trELlQ1IOGSnlzSSgKbtzPjDrsxpiFWYZssb5p0K

###
- Harco10
    + $2b$05$BjyEejqPYeGk.z5vUXmCGObUZQXcIYGic7BhRcidNTXKO780tWEl2

###
- Natal32
    + $2b$05$yo2QU1IrS7WIZRfOFj1RvOpqquXo7YkTP35F4QAm/140z8ZLi0gfi

###
- Jaine73
    + $2b$05$23yjJS2sKWyxUbppKL6WZ.Ab0Fcg86BnSxnoQY6jBx1OeY508Yb2W

###
- Shari12
    + $2b$05$oVusOdglUvW7ghwieH7RP.GyWXP05/rrUTz67MPXiG6EETZUigfD.

###
- Stafo51
    + $2b$05$Y1MLoWXOZkmii5KFZw.VYexN3SgJOCXKaOGLfTGwHKtZA8HhUsRIu

###
- Serge53
    + $2b$05$gOCnM6fEOvpmjsHEqLHgRubSEodVfSQrbvEJwCfWkXTNRYQ.v/ktq

###
- TanaR65
    + $2b$05$YH2GDHbhrPIr3K4lhLu74u0igDBXpAJnoA9OaF1BjSk6QXninPiVO

###
- Russe20
    + $2b$05$0ErgzT8UJk0Q2AcGUsym2e2ORsgK25XyJUtRw0yfVi4ngMZnByzo.

###
- Sibby47
    + $2b$05$MiyiyCatQaGYmgEZMixszOeP5ucCevQ9wGD3dF4VJrCdYW7LbtMQ2

###
- KiahT15
    + $2b$05$LzHPsVwYswC4Syx7WR3JTeIlcoTla/PGSQD0rzHKHFT5OffWRZSKy

###
- Krist72
    + $2b$05$qcnsdnQkLcY0vC3s7ZY30eWqDd.fpGT0MJeCg.W2lRMt50nIdAsJS




## Tham khảo
https://stackoverflow.com/questions/18796221/creating-a-select-box-with-a-search-option