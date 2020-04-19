using Microsoft.EntityFrameworkCore.Migrations;

namespace final.Migrations
{
    public partial class shubhi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmpLeaves",
                columns: table => new
                {
                    emlid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    employeeid = table.Column<int>(nullable: false),
                    leaveid = table.Column<string>(nullable: true),
                    leavestartdate = table.Column<string>(nullable: true),
                    leaveenddate = table.Column<string>(nullable: true),
                    status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmpLeaves", x => x.emlid);
                });

            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    employeeid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    employeename = table.Column<string>(nullable: true),
                    dob = table.Column<string>(nullable: true),
                    doj = table.Column<string>(nullable: true),
                    salary = table.Column<int>(nullable: false),
                    email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.employeeid);
                });

            migrationBuilder.CreateTable(
                name: "Leave",
                columns: table => new
                {
                    leaveid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    leavename = table.Column<string>(nullable: true),
                    maxleaveallowed = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leave", x => x.leaveid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmpLeaves");

            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.DropTable(
                name: "Leave");
        }
    }
}
