#include "MainWindow.h"
#include "ui_MainWindow.h"
#include <QDebug>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    connect(&m_webSocket, &QWebSocket::connected, this, &MainWindow::onConnected);
    m_webSocket.open(QUrl(QStringLiteral("ws://localhost:3000")));
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::onConnected()
{
    qDebug() << "onConnected";
}
